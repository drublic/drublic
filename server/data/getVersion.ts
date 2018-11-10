import * as pkg from "../../package.json";

const getVersion = (): string => {
  return (pkg as any).version;
};

export default getVersion;
