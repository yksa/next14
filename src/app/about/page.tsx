import { cookies } from "next/headers";

export default function About() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log({ theme });
  console.log("About server component");
  return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
}
