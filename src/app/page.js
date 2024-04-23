import "../assets/styles/globals.css";
import NavBar from "./components/NavBar/navbar";
import Overview from "./components/Overview/overview";
import Skills from "./components/Skills/skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <Overview />
      <Skills />
    </>
  );
}