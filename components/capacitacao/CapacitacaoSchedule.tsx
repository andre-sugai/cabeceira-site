import React, { useState } from 'react';

interface DaySchedule {
  date: string;
  dateSubtitle?: string;
  sessions: {
    location: string;
    address: string;
    mapUrl?: string;
    time?: string;
    items: { time: string; activity: string }[];
  }[];
}

const schedule: DaySchedule[] = [
  {
    date: '23 de março',
    sessions: [
      {
        location: 'Sítio Delpasso',
        address: 'Zona Rural — Araraquara/SP',
        mapUrl: 'https://maps.app.goo.gl/cEHdJSBdtE7Faaur9',
        time: 'Manhã',
        items: [
          { time: '08h15', activity: 'Café da manhã e acolhimento' },
          { time: '09h00', activity: 'Abertura institucional e apresentação do projeto' },
          { time: '10h00', activity: 'Apresentação das equipes' },
          { time: '11h00', activity: 'Almoço de integração, recepção dos convidados e release para imprensa' },
        ],
      },
      {
        location: 'Instituto de Química – UNESP Araraquara',
        address: 'Av. Prof. Francisco Degni, 55 — Jardim Quitandinha — Araraquara/SP',
        mapUrl: 'https://maps.app.goo.gl/iqUNESP',
        time: 'Tarde (após deslocamento às 13h30)',
        items: [
          { time: '14h00', activity: 'Aula formativa' },
          { time: '16h30', activity: 'Coffee break' },
          { time: '18h00', activity: 'Encerramento do dia' },
        ],
      },
    ],
  },
  {
    date: '24, 25, 26 e 27 de março',
    dateSubtitle: 'Instituto de Química – UNESP Araraquara',
    sessions: [
      {
        location: 'Instituto de Química – UNESP Araraquara',
        address: 'Av. Prof. Francisco Degni, 55 — Jardim Quitandinha — Araraquara/SP',
        mapUrl: 'https://maps.app.goo.gl/iqUNESP',
        items: [
          { time: '08h15', activity: 'Início das aulas / atividades formativas' },
          { time: '10h00', activity: 'Breve pausa (manhã)' },
          { time: '12h00', activity: 'Almoço' },
          { time: '14h00', activity: 'Retorno das atividades' },
          { time: '16h00', activity: 'Breve pausa (tarde)' },
          { time: '18h00', activity: 'Encerramento do dia' },
        ],
      },
    ],
  },
];

const CapacitacaoSchedule: React.FC = () => {
  const [openDay, setOpenDay] = useState<number | null>(0);

  return (
    <section id="programacao" className="py-24 bg-white dark:bg-background-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="material-icons-round text-sm">calendar_month</span>
            Programação Geral
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            23 a 27 de março
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto">
            Confira abaixo a programação completa, incluindo horários, atividades e locais para cada dia da semana.
          </p>
        </div>

        {/* Accordion Days */}
        <div className="space-y-4">
          {schedule.map((day, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
            >
              {/* Day header (accordion toggle) */}
              <button
                onClick={() => setOpenDay(openDay === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-5 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left"
              >
                <div>
                  <span className="text-xl font-extrabold text-primary dark:text-accent">{day.date}</span>
                  {day.dateSubtitle && (
                    <span className="ml-3 text-sm font-medium text-slate-500 dark:text-slate-400">{day.dateSubtitle}</span>
                  )}
                </div>
                <span className="material-icons-round text-primary dark:text-accent transition-transform duration-300" style={{ transform: openDay === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  expand_more
                </span>
              </button>

              {/* Day content */}
              {openDay === idx && (
                <div className="px-6 pb-6 pt-2 bg-white dark:bg-background-dark">
                  {day.sessions.map((session, sIdx) => (
                    <div key={sIdx} className={sIdx > 0 ? 'mt-8 pt-8 border-t border-slate-100 dark:border-slate-800' : 'mt-4'}>
                      {/* Session label */}
                      <div className="mb-4">
                        {session.time && (
                          <div className="inline-flex items-center gap-1.5 bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent px-3 py-1 rounded-full text-xs font-bold mb-2">
                            <span className="material-icons-round text-xs">schedule</span>
                            {session.time}
                          </div>
                        )}
                        <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-lg">{session.location}</h3>
                        <p className="text-slate-400 dark:text-slate-500 text-sm mt-0.5 flex items-start gap-1">
                          <span className="material-icons-round text-sm mt-0.5">place</span>
                          {session.address}
                        </p>
                      </div>

                      {/* Schedule table */}
                      <div className="rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800">
                        {session.items.map((item, iIdx) => (
                          <div
                            key={iIdx}
                            className={`flex items-center gap-4 px-4 py-3 ${
                              iIdx % 2 === 0
                                ? 'bg-slate-50 dark:bg-slate-900/50'
                                : 'bg-white dark:bg-background-dark'
                            }`}
                          >
                            <span className="text-primary dark:text-accent font-extrabold text-sm w-14 shrink-0">
                              {item.time}
                            </span>
                            <span className="text-slate-700 dark:text-slate-300 text-sm">{item.activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Displacement notice */}
        <div className="mt-8 flex items-start gap-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-5">
          <span className="material-icons-round text-amber-500 mt-0.5">directions_car</span>
          <div>
            <p className="font-bold text-amber-800 dark:text-amber-300 text-sm">Atenção — Deslocamento no dia 23</p>
            <p className="text-amber-700 dark:text-amber-400 text-sm mt-1">
              Às <strong>13h30</strong> haverá deslocamento do Sítio Delpasso até o Instituto de Química da UNESP Araraquara.
              Organize-se com antecedência para o transporte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapacitacaoSchedule;
