module.exports = {
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  experimental: { nftTracing: true },
  images: {
    domains: ["drublic.de"],
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
};
