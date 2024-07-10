import fs from "fs";

export const ServerComponentTwo = () => {
  fs.readFileSync("src/components/ServerComponentTwo.tsx", "utf-8");

  return <div>Server Component Two</div>;
};
