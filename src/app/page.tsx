import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <h1>Welcome home!</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/products"}>Products</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
    </>
  );
}
