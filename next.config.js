/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com', "flagcdn.com", "upload.wikimedia.org",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "cross-origin", // "same-origin-allow-popups"
          },

        ],
      },
    ];
  },
};

module.exports = nextConfig;
