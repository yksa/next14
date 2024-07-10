import fs from "fs";

export const ServerComponentOne = () => {
  fs.readFileSync("src/components/ServerComponentOne.tsx", "utf-8");

  return (
    <>
      <h1>Server Component One</h1>
    </>
  );
};
