"use client";

import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {
  console.log("Client route rendered");
  // if server-onl code is used it will cause build error
  //   const result = serverSideFunction();
  return (
    <>
      <h1>ClientRoutePage</h1>
      {/* <p>{result}</p> */}
    </>
  );
}
