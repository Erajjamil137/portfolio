import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Activities from "./components/Activities";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white font-sans overflow-hidden">
      <Navbar />
      <Hero />
      <Profile />
      <Projects />
      <Experience />
      <Activities />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
