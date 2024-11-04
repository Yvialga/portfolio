import NavBar from "../../components/NavBar/navbar";
import Footer from "../../components/footer/footer";
import DgtSlides from "../../components/mainContent/dgtSlides";
import Content from "./component/Content";

export default function Home() {
  return (
    <>
      <NavBar />
      <Content />
      <DgtSlides />
      <Footer />
    </>
  );
}