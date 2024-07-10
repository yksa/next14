export default function About() {
  console.log("About server component");
  return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
}
