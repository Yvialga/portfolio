import "../assets/styles/globals.css";
import NavBar from "./components/NavBar/navbar";
import Overview from "./components/mainContent/overview";
import Skills from "./components/mainContent/skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <Overview />
      <Skills />
    </>
  );
}