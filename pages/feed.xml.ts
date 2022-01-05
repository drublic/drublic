const Feed = () => "Feed";

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "/feed",
    },
  };
};

export default Feed;
