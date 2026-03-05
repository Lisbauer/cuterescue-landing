import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import AppFunction from "./components/AppFunction";
import CuteTagDevice from "./components/CuteTagDevice";
import CuteTags from "./components/CuteTags";
import AppDownload from "./components/AppDownload";
import PricingPlans from "./components/PricingPlans";
import Newsletter from "./components/Newsletter";
import Faq from "./components/Faq";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Page404 from "./pages/404Page";
import { Routes, Route } from "react-router-dom";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Reviews />
      <AppFunction />
      <CuteTagDevice />
      <CuteTags />
      <AppDownload />
      <PricingPlans />
      <Newsletter />
      <Faq />
      <ContactSection />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/error" element={<Page404 />} />
   
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}