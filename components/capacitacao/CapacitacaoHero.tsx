import React from 'react';

const CapacitacaoHero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background-light to-accent/10 dark:from-primary/20 dark:via-background-dark dark:to-accent/5">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-primary dark:bg-accent rounded-full animate-pulse" />
            ATER Bem Viver · Equipe Interna
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white mb-6">
            Curso de{' '}
            <span className="text-primary dark:text-accent">Capacitação</span>
            {' '}da Equipe
          </h1>

          <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed mb-4">
            Programação completa, endereços e informações essenciais para a semana de
            formação em Araraquara/SP — <strong className="text-slate-700 dark:text-slate-200">23 a 27 de março de 2025</strong>.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#programacao"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            >
              Ver Programação
              <span className="material-icons-round">calendar_month</span>
            </a>
            <a
              href="#locais"
              className="inline-flex items-center gap-2 border-2 border-primary dark:border-accent text-primary dark:text-accent px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/5 dark:hover:bg-accent/5 transition-all"
            >
              Ver Locais
              <span className="material-icons-round">location_on</span>
            </a>
          </div>

          {/* Quick info cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
            {[
              { icon: 'calendar_today', label: 'Início', value: '23 de março' },
              { icon: 'event', label: 'Término', value: '27 de março' },
              { icon: 'schedule', label: 'Horário', value: '08h15 às 18h' },
              { icon: 'place', label: 'Cidade', value: 'Araraquara/SP' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center"
              >
                <span className="material-icons-round text-primary dark:text-accent text-2xl mb-1">{item.icon}</span>
                <span className="text-xs text-slate-400 font-medium">{item.label}</span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100 mt-0.5">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapacitacaoHero;
