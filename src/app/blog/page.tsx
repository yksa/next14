import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  //   title: "Blog",
  title: { absolute: "Blog" }, // it will remove template in parent title
};

export default function Blog() {
  return (
    <>
      <h1>My blog</h1>
      <Link href={"/"}>Home</Link>
    </>
  );
}
