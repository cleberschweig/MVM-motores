import bombaSubmersa from "../assets/submersa.webp";
import motorMonofasico from "../assets/monofasico.webp";
import motorTrifasico from "../assets/trifasico.webp";

export function Services() {
  const servicos = [
    {
      id: 1,
      titulo: "Manutenção de Motores Trifásicos",
      image: motorTrifasico,
    },
    {
      id: 2,
      titulo: "Rebobinagem Especializada",
      image: motorMonofasico,
    },
    {
      id: 3,
      titulo: "Venda de Componentes Industriais",
      image: bombaSubmersa,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        
        <h2 className="text-3xl font-black text-[#002147] mb-12 uppercase tracking-tighter">
          motores e bombas a venda
        </h2>

  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((item) => (
            <div 
              key={item.id} 
              className="group border border-gray-200 rounded-sm p-8 flex flex-col justify-between hover:shadow-xl transition-shadow bg-white relative overflow-hidden"
            >
              
              <div className="h-64 flex items-center justify-center mb-6">
                <img 
                  src={item.image} 
                  alt={item.titulo} 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              
              <div className="flex justify-between items-end">
                <h3 className="text-lg font-bold text-[#002147] max-w-[200px] leading-tight">
                  {item.titulo}
                </h3>
                
                <div className="w-12 h-12 bg-[#FFC72C] rounded-full flex items-center justify-center text-[#002147] group-hover:bg-[#002147] group-hover:text-white transition-colors">
                  <span className="text-2xl font-bold">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}