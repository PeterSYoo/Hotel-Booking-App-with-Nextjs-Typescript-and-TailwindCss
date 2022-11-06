/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'via.placeholder.com',
      'lh3.googleusercontent.com',
      'unsplash.it',
      'avatars.githubusercontent.com',
    ],
  },
};

module.exports = nextConfig;
