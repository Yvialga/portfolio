'use client'
import "../assets/styles/globals.css";
import NavBar from "./components/NavBar/navbar";
import MainContent from "./components/mainContent/mainContent";

export default function Home() {
  return (
    <>
      <NavBar />
      <MainContent />
    </>
  );
}