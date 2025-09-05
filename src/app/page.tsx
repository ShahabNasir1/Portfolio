import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Skills from "../components/Skills";
import MeaningfulBrands from "../components/MeaningfulBrands";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <MeaningfulBrands />
      <Projects />
      <Resume/>
      <Footer />
    </main>
  );
}
