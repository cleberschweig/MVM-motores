export function Footer() {
  return (
    <footer className="w-full bg-[#f4f4f4] text-[#333]">
   
      <div className="bg-[#FFC72C] py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6 text-[#002147]">
         
            <span className="font-bold cursor-pointer hover:opacity-70 transition-opacity">YouTube</span>
            <span className="font-bold cursor-pointer hover:opacity-70 transition-opacity">Instagram</span>
            <span className="font-bold cursor-pointer hover:opacity-70 transition-opacity">Facebook</span>
            <span className="font-bold cursor-pointer hover:opacity-70 transition-opacity">LinkedIn</span>
          </div>
          <div className="text-[#002147] font-black text-xl tracking-tighter">
            MVM MOTORES
          </div>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        <div>
          <h3 className="font-bold text-[#002147] mb-6 uppercase">Empresa</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="hover:underline cursor-pointer">Sobre nós</li>
            <li className="hover:underline cursor-pointer">Trabalhe conosco</li>
            <li className="hover:underline cursor-pointer">História da MVM</li>
            <li className="hover:underline cursor-pointer">Política de Qualidade</li>
          </ul>
        </div>

     
        <div>
          <h3 className="font-bold text-[#002147] mb-6 uppercase">Suporte Técnico</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="hover:underline cursor-pointer">Motores e Manutenção</li>
            <li className="hover:underline cursor-pointer">Manuais de Equipamentos</li>
            <li className="hover:underline cursor-pointer">Dúvidas Frequentes</li>
          </ul>
        </div>

      
        <div>
          <h3 className="font-bold text-[#002147] mb-6 uppercase">Serviço</h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-center gap-3 cursor-pointer group">
              <div className="w-5 h-5 bg-[#002147] text-white flex items-center justify-center rounded-sm group-hover:bg-[#FFC72C] group-hover:text-[#002147] transition-colors">
                ✉
              </div>
              <span className="group-hover:underline">Fale Conosco</span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer group">
              <div className="w-5 h-5 bg-[#002147] text-white flex items-center justify-center rounded-sm group-hover:bg-[#FFC72C] group-hover:text-[#002147] transition-colors">
                📍
              </div>
              <span className="group-hover:underline">Nossa Localização</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300 max-w-7xl mx-auto" />

 
      <div className="max-w-7xl mx-auto py-8 px-6 flex flex-col md:flex-row justify-between items-start gap-8 text-[11px] text-gray-500 uppercase tracking-wider">
        <div className="flex flex-wrap gap-4">
          <span className="hover:underline cursor-pointer">Termos de uso</span>
          <span className="hover:underline cursor-pointer">Privacidade</span>
          <span className="hover:underline cursor-pointer">Aviso legal</span>
          <span className="hover:underline cursor-pointer">Cookies</span>
        </div>
        
        <div className="text-right leading-relaxed font-medium">
          MVM Motores do Vale Ltda.<br />
          Especialistas em Rebobinagem e Manutenção Elétrica<br />
          São Leopoldo, Rio Grande do Sul<br />
          Brasil
        </div>
      </div>
    </footer>
  );
}