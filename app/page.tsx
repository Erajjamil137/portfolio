import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Activities from "./components/Activities";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans overflow-hidden">
      <Navbar />
      <Hero />
      <Profile />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Activities />
      <Footer />
    </main>
  );
}
