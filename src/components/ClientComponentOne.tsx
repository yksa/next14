"use client";

import { ReactNode, useState } from "react";

export const ClientComponentOne = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("Batman");

  return (
    <>
      <h1>Client Component One</h1>
      {children}
    </>
  );
};
