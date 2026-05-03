export function Header() {
  return (
    <header className="relative w-full bg-[#002147] py-4 px-6 flex justify-between items-center z-40">
      

      <div className="text-white font-black text-2xl tracking-tighter">
        MVM <span className="text-[#FFC72C]">MOTORES do vale</span>
      </div>

    
      <nav className="flex gap-8 items-center">
        <a href="#" className="text-white font-bold hover:text-[#FFC72C] transition-colors">Início</a>
        
   
        <div className="relative group cursor-pointer">
          <span className="text-white font-bold group-hover:text-[#FFC72C] transition-colors">Equipe</span>
          
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white p-6 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t-4 border-[#FFC72C]">
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden border-2 border-[#002147] shadow-lg">
                <img 
                  src="https://github.com/cleberschweig.png" 
                  alt="Cleber Schweig" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-[#002147] text-lg font-black mb-1 text-center">Cleber Schweig</h3>
              <p className="text-[#FFC72C] text-xs font-bold mb-3 uppercase tracking-wider bg-[#002147] px-3 py-1 rounded text-center">
                Eletricista e Rebobinador Elétrico
              </p>
              <p className="text-gray-800 text-sm font-medium leading-relaxed text-center">
                Especialista em motores trifásicos e responsável pela manutenção elétrica e reparos elétricos.
              </p>
            </div>
          </div>
        </div>

    
        <a href="#" className="text-white font-bold hover:text-[#FFC72C] transition-colors">Motores</a>
        <a href="#" className="text-white font-bold hover:text-[#FFC72C] transition-colors">Motobombas</a>
        <a href="#" className="text-white font-bold hover:text-[#FFC72C] transition-colors">geradores</a>
        <a href="#" className="text-white font-bold hover:text-[#FFC72C] transition-colors">Serviços</a>
        <a href="#" className="text-white font-bold hover:text-[#FFC72C] transition-colors">Localização</a>
        
       
        <a href="#" className="bg-[#FFC72C] text-[#002147] px-5 py-2 rounded-full font-black hover:bg-white transition-all uppercase text-sm">
          Contato
        </a>
      </nav>
    </header>
  );
}