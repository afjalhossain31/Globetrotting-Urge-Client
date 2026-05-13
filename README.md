# Globetrotting Urge - Client Side

Globetrotting Urge is a modern travel destination discovery and booking application built with **Next.js 15+** and **Tailwind CSS**. It allows users to browse exotic locations, view detailed information, and manage their travel bookings seamlessly.

## 🚀 Key Features

- **Destination Discovery**: Browse a curated list of beautiful travel destinations.
- **Dynamic Details**: View rich information for each destination including duration, price, and location.
- **Secure Authentication**: Planned integration with **Better-Auth** for secure user login and profile management.
- **Booking Management**: Users can book their favorite trips and manage their current bookings.
- **Admin Capabilities**: Add, edit, or delete destinations directly from the UI (connected to a MongoDB backend).
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop using Tailwind CSS and HeroUI.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Runtime**: [Node.js](https://nodejs.org)
- **Database**: [MongoDB](https://www.mongodb.com) (Atlas)
- **Authentication**: Upcoming (NextAuth.js/Better-Auth)
- **Styling**: [Tailwind CSS](https://tailwindcss.com), [HeroUI](https://heroui.com)
- **Icons**: React Icons
- **State & Fetching**: React Server Components & Transitions

## 📂 Project Structure

- `src/app/destinations`: View all available trips.
- `src/app/destinations/[id]`: Detailed view of a specific destination.
- `src/app/add-destination`: Form to contribute new travel spots.
- `src/app/my-bookings`: Manage personal travel plans.
- `src/components`: Reusable UI components like `Navbar`, `Footer`, `BookingCard`, etc.

## ⚙️ Development Highlights

One of the more complex parts of this project involves handling **Server-Side Rendering (SSR)** mixed with **Client Side Interactivity**. For example, fetching data from a singular backend endpoint (`/destination`) while managing dynamic IDs for editing and deleting requires precise route handling in Next.js.

## Getting Started

First, ensure your backend server is running on `http://localhost:5000`. Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
