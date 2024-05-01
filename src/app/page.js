'use client'
import "../assets/styles/globals.css";
import NavBar from "./components/NavBar/navbar";
import MainContent from "./components/mainContent/mainContent";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <MainContent />
      <Footer />
    </>
  );
}