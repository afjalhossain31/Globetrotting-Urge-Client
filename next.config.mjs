/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.publicdomainpictures.net",
      },
    ],
  },
};

export default nextConfig;
