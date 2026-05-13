
"use client";

import React, { useTransition } from "react";
import {
  TextField,
  Label,
  Input,
  FieldError,
  Select,
  ListBox,
  TextArea,
  Button,
  Card,
} from "@heroui/react";

export default function AddDestinationPage() {
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);

    startTransition(async () => {
      try {
        const res = await fetch("http://localhost:5000/destinations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await res.json();
        console.log("Response:", result);
        if (res.ok) {
          alert("Destination added successfully!");
          e.target.reset();
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    });
  };

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold px-10 mb-6">Add New Destination</h1>

      <Card>
        <form onSubmit={onSubmit} className="p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="destinationName" isRequired>
                <Label>Destination Name</Label>
                <Input placeholder="Bali Paradise" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Country */}
            <TextField name="country" isRequired>
              <Label>Country</Label>
              <Input placeholder="Indonesia" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Category */}
            <div>
              <Select
                name="category"
                isRequired
                className="w-full"
                placeholder="Select category"
              >
                <Label>Category</Label>
                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Beach" textValue="Beach">Beach</ListBox.Item>
                    <ListBox.Item id="Mountain" textValue="Mountain">Mountain</ListBox.Item>
                    <ListBox.Item id="City" textValue="City">City</ListBox.Item>
                    <ListBox.Item id="Adventure" textValue="Adventure">Adventure</ListBox.Item>
                    <ListBox.Item id="Cultural" textValue="Cultural">Cultural</ListBox.Item>
                    <ListBox.Item id="Luxury" textValue="Luxury">Luxury</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Price */}
            <TextField name="price" type="number" isRequired>
              <Label>Price (USD)</Label>
              <Input type="number" placeholder="1299" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Duration */}
            <TextField name="duration" isRequired>
              <Label>Duration</Label>
              <Input placeholder="7 Days / 6 Nights" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Departure Date */}
            <div className="md:col-span-2">
              <TextField name="departureDate" type="date" isRequired>
                <Label>Departure Date</Label>
                <Input type="date" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          <Button
            type="submit"
            variant="outline"
            isLoading={isPending}
            className="rounded-none w-full bg-cyan-500 text-white"
          >
            {isPending ? "Adding Package..." : "Add Travel Package"}
          </Button>
        </form>
      </Card>
    </div>
  );
}

