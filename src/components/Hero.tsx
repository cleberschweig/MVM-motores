import motorImg from "../assets/motor.jpeg";

export function Hero() {
  return (
    <section
      className="relative w-full h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${motorImg})` }}
    >
      <div className="absolute inset-0 bg-[#002147]/70"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div className="w-20 h-1 bg-[#FFC72C] mb-8"></div>
        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6 uppercase">
          Potência que <br />
          <span className="text-[#FFC72C]">move o vale.</span>
        </h2>
        <p className="text-gray-200 max-w-2xl text-lg mb-10 font-light">
          Especialistas em manutenção, venda e automação de motores industriais.
          Qualidade técnica com a tradição da MVM.
        </p>
        <button className="bg-[#FFC72C] text-[#002147] px-12 py-5 text-sm font-black uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl">
          Solicitar Manutenção
        </button>
      </div>
    </section>
  );
}
