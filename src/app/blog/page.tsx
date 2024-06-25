import { Metadata } from "next";

export const metadata: Metadata = {
  //   title: "Blog",
  title: { absolute: "Blog" }, // it will remove template in parent title
};

export default function Blog() {
  return <h1>My blog</h1>;
}
