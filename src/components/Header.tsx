// src/components/Header.tsx

export function Header() {
  return (
    <header className="w-full bg-[#002147] py-5 px-6 shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO MVM */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-black text-white leading-none">
            MVM<span className="text-[#FFC72C]">motores do vale</span>
          </h1>
          <p className="text-[9px] text-[#FFC72C] font-bold tracking-[0.2em] uppercase">
            Potência Industrial
          </p>
        </div>

        {/* MENU DE NAVEGAÇÃO (Estatico por enquanto) */}
        <nav>
          <ul className="flex gap-8 text-white text-xs font-bold uppercase tracking-widest">
            <li className="hover:text-[#FFC72C] cursor-pointer transition-colors">
              Quem Somos
            </li>
            <li className="hover:text-[#FFC72C] cursor-pointer transition-colors">
              Motores
            </li>
            <li className="hover:text-[#FFC72C] cursor-pointer transition-colors">
              Contato
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
