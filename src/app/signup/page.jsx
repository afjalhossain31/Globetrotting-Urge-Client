"use client";

import { FcGoogle } from "react-icons/fc";
import React from 'react';
import { Button, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';

const SignUpPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());
        // console.log(user);

        const { data, error } = await authClient.signUp.email({
            name: user.name, // required
            email: user.email, // required
            password: user.password, // required
            image: user.imagesUrl,

        });

        if (error) {
            // toast.error(error.message);
            alert("Error");
        }
    };

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="max-w-7xl mx-auto p-5">
                <card className="border rounded-none">
                    <div className="text-center mb-5 my-3">
                        <h1 className="text-2xl font-bold">Create Account</h1>
                        <p>Start your adventure with Globetrotting</p>
                    </div>

                    <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>

                        <TextField
                            isRequired
                            name="name"
                            type="name"
                            validate={(value) => {
                                if (value.length < 2) {
                                    return "Name must be at least 2 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Name</Label>
                            <Input placeholder="Enter your name" />
                            <FieldError />

                        </TextField>


                        <TextField
                            name="imagesUrl"
                            type="url"
                        >
                            <Label>Images URL</Label>
                            <Input placeholder="Enter the URL of your images" />
                            <FieldError />

                        </TextField>

                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />

                        </TextField>
                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label>Password</Label>
                            <Input placeholder="Enter your password" />
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>

                        <div className="flex justify-center gap-2">
                            <Button className={'rounded-none w-full bg-cyan-500'} type="submit">
                                Create Account
                            </Button>

                        </div>
                    </Form>

                    <div className="flex justify-center items-center gap-3">
                        <Separator />
                        <div className="whitespace-nowrap"> Or sign up with </div>
                        <Separator />
                    </div>
                    <div>
                        <Button onClick={handleGoogleSignin} variant="outline" className={'w-full rounded-none'}><FcGoogle /> Sign in with Google</Button>
                    </div>

                </card>
            </div>
        );
    };

export default SignUpPage;