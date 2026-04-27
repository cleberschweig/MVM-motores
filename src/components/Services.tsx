// src/components/Services.tsx
export function Services() {
  const servicos = [
    {
      title: "Manutenção de Motores",
      desc: "Reparo especializado e preventivo.",
    },
    {
      title: "Venda de Equipamentos",
      desc: "As melhores marcas com garantia.",
    },
    {
      title: "Automação Industrial",
      desc: "Tecnologia para otimizar sua produção.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicos.map((s, index) => (
          <div
            key={index}
            className="p-8 border-t-4 border-[#002147] bg-gray-50 hover:bg-[#002147] hover:text-white transition-all group"
          >
            <span className="text-[#FFC72C] font-bold text-sm uppercase tracking-widest">
              Serviço 0{index + 1}
            </span>
            <h3 className="text-2xl font-black mt-4 mb-4 uppercase">
              {s.title}
            </h3>
            <p className="text-gray-500 group-hover:text-gray-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
