"use client";

import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const {
    data: session,

  } = authClient.useSession();
  //  console.log(session);
  const user = session?.user;
  console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();
  };


  return (
    <nav className="flex items-center justify-between bg-gray-200 p-5">
      <ul className="flex gap-3">

        <li>
          <Link href={"/"}>Home</Link>
        </li>

        <li>
          <Link href={"/destinations"}>Destinations</Link>
        </li>
        <li>
          <Link href={"/my-bookings"}>My Bookings</Link>
        </li>

        <li>
          <Link href={"/add-destination"}>Add Destination</Link>
        </li>
      </ul>

      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold tracking-tight text-blue-900">
          GLOBETROTTING URGE
        </h1>
      </div>

      <ul className="flex items-center gap-3">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>


        {user ? (
          <>
            <li>
              <Avatar>
                <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
            </li>
            <li>
              <Button size="sm" onClick={handleSignOut} variant="danger" className={"rounded-none"}>
                Logout
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/signup"}>Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};


export default Navbar;