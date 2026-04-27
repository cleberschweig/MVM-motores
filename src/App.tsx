import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#002147] font-sans">
      {/* 1. CABEÇALHO (O topo azul) */}
      <Header />

      {/* 2. HERO (A imagem do motor com o texto por cima) */}
      {/* Tiramos o texto manual daqui e chamamos o componente que você criou */}
      <Hero />

      {/* 3. CONTEÚDO (Serviços e o que mais vier depois) */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* A Seção de Serviços vinda do componente separado */}
        <div className="mt-10">
          <Services />
        </div>
      </main>
    </div>
  );
}
