import React from 'react';

const locations = [
  {
    id: 'sitio-delpasso',
    tag: 'Dia 23 — Manhã',
    name: 'Sítio Delpasso',
    type: 'Atividade de Campo',
    address: 'Zona Rural — Araraquara/SP',
    description:
      'Local onde acontece a abertura institucional, a apresentação do projeto e o almoço de integração com as equipes e convidados.',
    mapsLink: 'https://maps.app.goo.gl/cEHdJSBdtE7Faaur9',
    embedSrc:
      'https://maps.google.com/maps?q=Sitio+Delpasso,+Araraquara,+SP,+Brazil&t=&z=15&ie=UTF8&iwloc=&output=embed',
    icon: 'park',
    iconBg: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-700 dark:text-green-400',
    highlights: [
      { icon: 'wb_sunny', text: 'Período da manhã (até 13h30)' },
      { icon: 'restaurant', text: 'Café da manhã + almoço de integração' },
      { icon: 'groups', text: 'Recepção de convidados e imprensa' },
    ],
  },
  {
    id: 'iq-unesp',
    tag: 'Dia 23 (tarde) ao dia 27',
    name: 'Instituto de Química – UNESP',
    type: 'Local Principal das Aulas',
    address: 'Av. Prof. Francisco Degni, 55 — Jardim Quitandinha — Araraquara/SP',
    description:
      'Sede das aulas formativas e atividades de capacitação de terça a sexta. No dia 23, as atividades no IQ/UNESP começam às 14h após o deslocamento do Sítio Delpasso.',
    mapsLink: 'https://maps.app.goo.gl/iqUNESP',
    embedSrc:
      'https://maps.google.com/maps?q=Av.+Prof.+Francisco+Degni+55,+Araraquara,+SP,+Brazil&t=&z=16&ie=UTF8&iwloc=&output=embed',
    icon: 'school',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-700 dark:text-blue-400',
    highlights: [
      { icon: 'calendar_today', text: '23 (tarde) a 27 de março' },
      { icon: 'schedule', text: 'Aulas das 08h15 às 18h00' },
      { icon: 'free_breakfast', text: 'Coffee break às 16h30 (dia 23)' },
    ],
  },
  {
    id: 'casa-emaus',
    tag: 'Hospedagem',
    name: 'Casa de Emaús Araraquara',
    type: 'Hospedagem da Equipe',
    address: 'Rodovia Washington Luiz, Km 280 (trevo do Auto Posto Morada do Sol), sentido São Carlos — Araraquara/SP',
    description:
      'Local de hospedagem da equipe durante toda a semana. Fica acessível pela rodovia e está no caminho tanto para o IQ/UNESP quanto para o Sítio Delpasso. Os quartos são individuais com banheiro, roupa de cama e travesseiro. Lembrem-se de trazer toalha.',
    mapsLink: 'https://maps.app.goo.gl/nuFpxQ7VaTDAQEaW9',
    embedSrc:
      'https://maps.google.com/maps?q=Casa+de+Emaus+Araraquara+SP&t=&z=15&ie=UTF8&iwloc=&output=embed',
    icon: 'hotel',
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-700 dark:text-purple-400',
    highlights: [
      { icon: 'single_bed', text: 'Quartos individuais com banheiro privativo' },
      { icon: 'bed', text: 'Roupa de cama e travesseiro inclusos' },
      { icon: 'warning', text: '⚠️ Trazer toalha própria' },
    ],
    importantNotice: 'Lembre-se de trazer sua toalha. Roupas de cama e travesseiro são fornecidos.',
  },
];

const CapacitacaoLocations: React.FC = () => {
  return (
    <section id="locais" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="material-icons-round text-sm">location_on</span>
            Locais do Curso
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Onde tudo acontece
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto">
            Três locais que farão parte da semana de capacitação. Confira os endereços e abra o mapa antes de sair.
          </p>
        </div>

        {/* Location cards */}
        <div className="space-y-12">
          {locations.map((loc) => (
            <div
              key={loc.id}
              id={loc.id}
              className="bg-white dark:bg-background-dark rounded-3xl shadow-md border border-slate-100 dark:border-slate-800 overflow-hidden"
            >
              {/* Card header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 px-6 pt-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className={`w-14 h-14 rounded-2xl ${loc.iconBg} flex items-center justify-center shrink-0`}>
                  <span className={`material-icons-round text-3xl ${loc.iconColor}`}>{loc.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="inline-block bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent text-xs font-bold px-3 py-0.5 rounded-full">
                      {loc.tag}
                    </span>
                    <span className="text-slate-400 text-xs">{loc.type}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">{loc.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5 flex items-start gap-1">
                    <span className="material-icons-round text-sm mt-0.5 shrink-0">place</span>
                    {loc.address}
                  </p>
                </div>
                <a
                  href={loc.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-all shrink-0 shadow-sm"
                >
                  <span className="material-icons-round text-sm">open_in_new</span>
                  Abrir no Maps
                </a>
              </div>

              {/* Card body */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Info */}
                <div className="px-6 py-5">
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
                    {loc.description}
                  </p>
                  <div className="space-y-3">
                    {loc.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-center shrink-0">
                          <span className="material-icons-round text-primary dark:text-accent text-sm">{h.icon}</span>
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 text-sm">{h.text}</span>
                      </div>
                    ))}
                  </div>
                  {loc.importantNotice && (
                    <div className="mt-5 flex items-start gap-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-3">
                      <span className="material-icons-round text-amber-500 text-sm mt-0.5">info</span>
                      <p className="text-amber-700 dark:text-amber-300 text-xs leading-relaxed">{loc.importantNotice}</p>
                    </div>
                  )}
                </div>

                {/* Map embed */}
                <div className="h-64 lg:h-auto lg:min-h-[260px] bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                  <iframe
                    title={`Mapa — ${loc.name}`}
                    src={loc.embedSrc}
                    style={{ border: 0, width: '100%', height: '100%', minHeight: '260px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapacitacaoLocations;
