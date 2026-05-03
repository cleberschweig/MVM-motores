import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services"; 
import { Footer } from "./components/Footer";

import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#002147] font-sans">
      <Header />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="mt-10">
          <Services />
          <Footer />
        </div>
      </main>
    </div>
  );
}