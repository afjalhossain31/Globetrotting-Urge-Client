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

## Banner Component

```jsx
import { Separator } from "@heroui/react";

const Banner = () => {
	return (
		<div className="bg-[url('/assets/banner.png')] text-white  flex justify-between flex-col items-center  gap-5 h-150">
			<div className="p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
				<h1 className="text-7xl">
					Discover Your <br /> Next Adventure
				</h1>

				<p className="text-2xl">
					Explore breathtaking destinations and create unforgettable memories
					with our curated travel experiences.
				</p>

				<div className="flex gap-5">
					<button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer">
						Explore Now
					</button>

					<button className="uppercase px-5 py-3 bg-white/50 cursor-pointer">
						View Destination
					</button>
				</div>
			</div>

			<div className=" bg-white/30 flex justify-between gap-5 w-full items-center">
				<div className="px-3">
					<h3 className="text-sm">Location</h3>
					<p className="text-xs">Address, City or Zip</p>
				</div>

				 <Separator variant="tertiary" orientation="vertical" />

				<div>
					<h3 className="text-sm">Date/Duration</h3>
					<p className="text-xs">Anytime/3 Days</p>
				</div>

					 <Separator variant="tertiary" orientation="vertical" />

				<div>
					<h3 className="text-sm">Budget</h3>
					<p className="text-xs">$0-$3000</p>
				</div>

					 <Separator variant="tertiary" orientation="vertical" />

				<div>
					<h3 className="text-sm">People</h3>
					<p className="text-xs">5-10</p>
				</div>



				<div className="bg-cyan-500 py-2 px-4">
					<h3>Search</h3>
				</div>
			</div>
		</div>
	);
};

export default Banner;
```

## Footer Component

```jsx
const Footer = () => {
	return (
		<footer className="bg-black text-gray-400 px-6 md:px-16 py-16">
			<div className="max-w-7xl mx-auto">
				<div className="mb-12">
					<h1 className="text-6xl md:text-7xl font-bold text-white">
						Wanderlust
					</h1>
					<p className="mt-4 max-w-xl">
						Your gateway to extraordinary travel experiences around the world.
					</p>
				</div>

				{/* Grid Section */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-10">
					{/* Newsletter */}
					<div>
						<h3 className="text-white mb-3 tracking-wide">NEWSLETTER</h3>
						<p className="mb-4 text-sm">
							Subscribe for exclusive travel deals and inspiration.
						</p>

						<div className="flex items-center bg-gray-800 px-4 py-3">
							<input
								type="email"
								placeholder="Enter email"
								className="bg-transparent outline-none flex-1 text-sm"
							/>
							<span className="text-white text-lg">↗</span>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-white mb-3 tracking-wide">QUICK LINKS</h3>
						<ul className="space-y-2">
							<li className="hover:text-white cursor-pointer">Home</li>
							<li className="hover:text-white cursor-pointer">Destinations</li>
							<li className="hover:text-white cursor-pointer">My Bookings</li>
							<li className="hover:text-white cursor-pointer">My Profile</li>
						</ul>
					</div>

					{/* Support */}
					<div>
						<h3 className="text-white mb-3 tracking-wide">SUPPORT</h3>
						<ul className="space-y-2">
							<li className="hover:text-white cursor-pointer">Help Center</li>
							<li className="hover:text-white cursor-pointer">
								Terms of Service
							</li>
							<li className="hover:text-white cursor-pointer">
								Privacy Policy
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="text-white mb-3 tracking-wide">CONTACT US</h3>
						<ul className="space-y-2">
							<li>786 901 1622</li>
							<li>info@wandarland.com</li>
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
					<p className="text-sm">
						© 2026 Wanderlust. All rights reserved.
					</p>

					<div className="flex gap-5 mt-4 md:mt-0 text-white text-lg">
						<span className="cursor-pointer">X</span>
						<span className="cursor-pointer">in</span>
						<span className="cursor-pointer">◎</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
```

## MongoDB DNS Fix

If MongoDB connection fails with a DNS resolution error, add this before creating the MongoDB client:

```js
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
```

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
