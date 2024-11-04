'use client'
import NavBar from "../../components/NavBar/navbar";
import Footer from "../../components/footer/footer";
import CanoeSlides from "./components/canoeSlides";
import Content from "./components/content.jsx";

export default function Home() {
  return (
    <>
      <NavBar />
      <Content />
      <CanoeSlides />
      <Footer />
    </>
  );
}