module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drublic.de",
      },
      {
        protocol: "https",
        hostname: "www.hansreinl.de",
      },
      {
        protocol: "https",
        hostname: "hansreinl.de",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/archive/:path*",
        destination: "/blog/:path*",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/.well-known/llms.txt",
        destination: "/llms.txt",
      },
    ];
  },
};
