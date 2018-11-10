const getBaseUrl = (): string => {
  return process.env.NODE_ENV === "production"
    ? "https://drublic.de"
    : "";
};

export default getBaseUrl;
