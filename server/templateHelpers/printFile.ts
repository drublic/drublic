import * as fs from "fs";
import * as path from "path";
import * as pkg from "../../package.json";

const printFile = (fileName: any): string => {
  const { version } = (pkg as any);
  const filePath = path.resolve(__dirname, "../../public/dist/", version, fileName);

  try {
    const content: string = fs.readFileSync(filePath, "utf-8");

    return content;
  } catch (error) {
    return "";
  }
};

export default printFile;
