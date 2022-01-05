const Sitemap = () => "Sitemap";

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "/sitemap",
    },
  };
};

export default Sitemap;
