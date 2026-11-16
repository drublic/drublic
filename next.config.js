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
        source: "/what-i-want-to-do",
        destination: "/work-with-me",
        permanent: true,
      },
      {
        source: "/archive/:path*",
        destination: "/blog/:path*",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return {
      beforeFiles: [
        // Legacy tag filter URLs (/blog?tag=css) → static tag archive.
        {
          source: "/blog",
          has: [{ type: "query", key: "tag", value: "(?<tag>.+)" }],
          destination: "/blog/tag/:tag",
        },
      ],
      afterFiles: [
        {
          source: "/.well-known/llms.txt",
          destination: "/llms.txt",
        },
      ],
      fallback: [],
    };
  },
};
