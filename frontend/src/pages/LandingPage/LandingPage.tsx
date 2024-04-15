import Layout from "@/layout/Layout";

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ContactUs from "@/components/ContactUs";
import FAQ from "@/pages/FAQ";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
    <NavBar />
      <Layout>
        <Hero />
        <Products />
        {/* <Partners /> */}
        <Testimonials />
        {/* <NewsLetter /> */}
        <FAQ />
        <ContactUs />
      </Layout>
      <Footer />
    </>
  );
};

export default LandingPage;
