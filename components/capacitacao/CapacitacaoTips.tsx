import React from 'react';

const tips = [
  {
    icon: 'luggage',
    title: 'O que levar',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-100 dark:border-blue-800',
    items: [
      'Toalha de banho (obrigatório — hospedagem não fornece)',
      'Roupas confortáveis para 5 dias',
      'Notebook ou tablet (para acompanhar planilhas, e-mails e formulários)',
      'Carregador e cabos de bateria',
      'Documentos pessoais',
    ],
  },
  {
    icon: 'computer',
    title: 'Equipamentos & Tecnologia',
    color: 'text-primary dark:text-accent',
    bg: 'bg-primary/5 dark:bg-accent/5',
    border: 'border-primary/20 dark:border-accent/20',
    items: [
      'Você precisará de notebook para as atividades práticas',
      'Se não tiver ou seu notebook estiver com problemas, entre em contato com a coordenação ANTES do curso',
      'Os materiais enviados previamente são confidenciais — não compartilhe',
    ],
  },
  {
    icon: 'lock',
    title: 'Confidencialidade',
    color: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    border: 'border-rose-100 dark:border-rose-800',
    items: [
      'Todo o material recebido antecipadamente é CONFIDENCIAL',
      'Você está em processo de contratação — os contratos contemplam termos de confidencialidade',
      'Não compartilhe os materiais com terceiros',
    ],
  },
  {
    icon: 'directions_car',
    title: 'Como chegar',
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-100 dark:border-amber-800',
    items: [
      'A Casa de Emaús fica na Rodovia Washington Luiz, Km 280 — fácil acesso pela rodovia',
      'Do alojamento, o IQ/UNESP e o Sítio Delpasso ficam no mesmo trajeto',
      'Verifique a rota com antecedência e combine caronas com a equipe se necessário',
    ],
  },
];

const CapacitacaoTips: React.FC = () => {
  return (
    <section id="dicas" className="py-24 bg-white dark:bg-background-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="material-icons-round text-sm">checklist</span>
            Informações Práticas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Antes de partir — leia com atenção
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto">
            Tudo que você precisa saber para se preparar para a semana de capacitação em Araraquara.
          </p>
        </div>

        {/* Tips grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className={`rounded-2xl border ${tip.border} ${tip.bg} p-6`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`material-icons-round text-2xl ${tip.color}`}>{tip.icon}</span>
                <h3 className={`font-extrabold text-lg ${tip.color}`}>{tip.title}</h3>
              </div>
              <ul className="space-y-3">
                {tip.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <span className="material-icons-round text-slate-400 text-sm mt-0.5 shrink-0">arrow_forward_ios</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 bg-primary text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <h4 className="font-extrabold text-lg mb-1">Ficou com dúvida?</h4>
            <p className="text-white/80 text-sm">
              Se você tiver alguma dúvida sobre a programação, hospedagem ou materiais, entre em contato com a coordenação da equipe.
            </p>
          </div>
          <a
            href="https://wa.me/5516991186029"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all shrink-0 shadow-md"
          >
            <span className="material-icons-round text-sm">chat</span>
            Falar com a Coordenação
          </a>
        </div>
      </div>
    </section>
  );
};

export default CapacitacaoTips;
