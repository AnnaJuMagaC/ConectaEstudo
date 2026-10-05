import React, { useState } from 'react';
import { ScreenType } from '../types';

interface BiologiaTrilhaScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onBack: () => void;
}

export const BiologiaTrilhaScreen: React.FC<BiologiaTrilhaScreenProps> = ({ onNavigate, onBack }) => {
  const [activeModule, setActiveModule] = useState(3);

  return (
    <div className="flex flex-col w-full pb-8">
      {/* Top Breadcrumb / Title Bar */}
      <div className="px-5 pt-2 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            aria-label="Voltar para Disciplinas"
            className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-[#57423b] hover:bg-[#f6ece8] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-[18px] font-bold text-[#1f1b19]">Biologia</span>
              <span className="px-2 py-0.5 rounded-full bg-[#ffdbcf] text-[#390c00] text-[11px] font-bold">
                82%
              </span>
            </div>
            <span className="text-[12px] text-[#57423b]">Ensino Médio &amp; Vestibulares</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => alert('Buscar tópico dentro de Biologia...')}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#57423b] hover:bg-[#f6ece8] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[22px]">search</span>
          </button>
          <button
            onClick={() => alert('Filtrar por tipo de conteúdo')}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#57423b] hover:bg-[#f6ece8] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[22px]">tune</span>
          </button>
        </div>
      </div>

      {/* Main Track Card */}
      <div className="px-5 mt-2">
        <div className="relative overflow-hidden rounded-2xl bg-[#f6ece8] p-4 shadow-sm border border-[#dec0b7]/50">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1 text-[#954551] text-[12px] font-semibold">
                <span className="material-symbols-outlined text-[16px] fill">local_fire_department</span>
                <span>Trilha Principal</span>
              </div>
              <h2 className="text-[18px] font-bold text-[#1f1b19] truncate">Biologia Celular e Genética</h2>
            </div>
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-[#9f3c16] shadow-xs shrink-0">
              <span className="material-symbols-outlined text-[24px]">biotech</span>
            </div>
          </div>

          <div className="mt-2 mb-1">
            <div className="flex justify-between items-center mb-1.5 text-[11px]">
              <span className="text-[#57423b]">Progresso global</span>
              <span className="font-semibold text-[#9f3c16]">18 de 22 conteúdos (82%)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#f0e6e2] overflow-hidden">
              <div className="h-full bg-[#9f3c16] rounded-full transition-all duration-500" style={{ width: '82%' }}></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 mt-2 bg-[#fcf1ee] rounded-xl p-2.5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#9e3d0c] text-[20px]">schedule</span>
              <div>
                <p className="text-[11px] text-[#57423b]">Dedicado</p>
                <p className="text-[12px] font-semibold text-[#1f1b19]">14h 20min</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#954551] text-[20px]">workspace_premium</span>
              <div>
                <p className="text-[11px] text-[#57423b]">Taxa de Acerto</p>
                <p className="text-[12px] font-semibold text-[#1f1b19]">88% no geral</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Modules Horizontal Bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between px-5 mb-1.5">
          <h3 className="text-[14px] font-semibold text-[#1f1b19]">Módulos de Aprendizagem</h3>
          <span className="text-[11px] text-[#954551] font-medium">4 etapas</span>
        </div>
        <div className="flex gap-2 overflow-x-auto px-5 pb-2 pt-1 no-scrollbar">
          {[
            { id: 1, label: 'Mód. 1: Introdução', completed: true },
            { id: 2, label: 'Mód. 2: Estrutura Celular', completed: true },
            { id: 3, label: 'Mód. 3: Divisão Celular', active: true },
            { id: 4, label: 'Mód. 4: Genética', locked: true },
          ].map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveModule(mod.id)}
              className={`flex-shrink-0 px-3.5 py-2 rounded-full text-[12px] font-semibold flex items-center gap-1.5 transition-all active:scale-95 ${
                activeModule === mod.id
                  ? 'bg-[#9f3c16] text-white shadow-sm'
                  : 'bg-[#f6ece8] text-[#57423b] hover:bg-[#f0e6e2]'
              }`}
            >
              {mod.completed && (
                <span className="material-symbols-outlined text-[16px] text-[#954551]">check_circle</span>
              )}
              {mod.active && (
                <span className="material-symbols-outlined text-[16px]">play_circle</span>
              )}
              {mod.locked && (
                <span className="material-symbols-outlined text-[16px] opacity-60">lock_open</span>
              )}
              <span>{mod.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Module 3 Contents List */}
      <div className="px-5 mt-3 flex flex-col gap-3">
        <div className="flex items-center justify-between mb-0.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#9f3c16] animate-pulse"></span>
            <h3 className="text-[16px] font-bold text-[#1f1b19]">Conteúdos do Módulo 3</h3>
          </div>
          <span className="text-[11px] text-[#57423b]">5 tópicos</span>
        </div>

        {/* Card 1: Em Andamento / Destaque */}
        <div className="rounded-2xl bg-white p-4 shadow-sm relative overflow-hidden transition-transform active:scale-[0.99] border border-[#f0e6e2]">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#9f3c16]"></div>
          <div className="flex items-start justify-between gap-2 pl-1">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="px-2 py-0.5 rounded-full bg-[#ffdbcf] text-[#390c00] text-[11px] font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">motion_photos_on</span>
                  Em andamento
                </span>
                <span className="text-[11px] text-[#57423b] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">timer</span> 35 min
                </span>
                <span className="text-[11px] text-[#954551] flex items-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-[14px]">menu_book</span> Estudo + Prática
                </span>
              </div>
              <h4 className="text-[16px] font-bold text-[#1f1b19] mb-1">Ciclo Celular: Mitose e Meiose</h4>
              <p className="text-[13px] text-[#57423b] line-clamp-2 mb-3">
                Fases da interfase, segregação de cromossomos homólogos e cruzamento gênico (crossing-over).
              </p>
              <div className="bg-[#fcf1ee] rounded-xl p-2.5 mb-3">
                <div className="flex justify-between items-center mb-1 text-[11px]">
                  <span className="text-[#57423b]">Avanço da aula</span>
                  <span className="font-semibold text-[#9f3c16]">68% lido</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#ebe0dd] overflow-hidden">
                  <div className="h-full bg-[#9f3c16] rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 pl-1">
            <span className="text-[11px] text-[#57423b]">Ponto de parada: Prófase I</span>
            <button
              onClick={() => onNavigate('conteudo-ciclo-celular')}
              className="h-10 px-4 rounded-xl bg-[#9f3c16] text-white text-[13px] font-bold flex items-center gap-1.5 shadow-sm hover:opacity-95 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[18px] fill">play_arrow</span>
              <span>Continuar</span>
            </button>
          </div>
        </div>

        {/* Card 2: Concluído */}
        <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#f0e6e2]">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="px-2 py-0.5 rounded-full bg-[#ffd9dc] text-[#3f0211] text-[11px] font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check</span> Concluído
                </span>
                <span className="text-[11px] text-[#57423b] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">timer</span> 45 min
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#f6ece8] text-[#954551] text-[11px] font-semibold">
                  Quiz 90%
                </span>
              </div>
              <h4 className="text-[15px] font-bold text-[#1f1b19] mb-1">Organelas Citoplasmáticas e Bioenergética</h4>
              <p className="text-[13px] text-[#57423b] line-clamp-1 mb-2">
                Mitocôndrias, cloroplastos, retículo endoplasmático e complexo golgiense.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-[#f6ece8]">
            <div className="flex items-center gap-1.5 text-[#954551] text-[11px] font-medium">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Concluído em 14 de Março</span>
            </div>
            <button
              onClick={() => onNavigate('conteudo-ciclo-celular')}
              className="h-8 px-3 rounded-lg bg-[#f6ece8] text-[#954551] text-[12px] font-semibold flex items-center gap-1 hover:bg-[#ebe0dd] active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">replay</span>
              <span>Revisar</span>
            </button>
          </div>
        </div>

        {/* Card 3: Concluído */}
        <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#f0e6e2]">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="px-2 py-0.5 rounded-full bg-[#ffd9dc] text-[#3f0211] text-[11px] font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check</span> Concluído
                </span>
                <span className="text-[11px] text-[#57423b] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">timer</span> 30 min
                </span>
              </div>
              <h4 className="text-[15px] font-bold text-[#1f1b19] mb-1">Membrana Plasmática e Transporte Celular</h4>
              <p className="text-[13px] text-[#57423b] line-clamp-1 mb-2">
                Difusão simples, facilitada, osmose e transporte ativo primário/secundário.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-[#f6ece8]">
            <span className="text-[11px] text-[#57423b]">12 flashcards dominados</span>
            <button
              onClick={() => onNavigate('conteudo-ciclo-celular')}
              className="h-8 px-3 rounded-lg bg-[#f6ece8] text-[#954551] text-[12px] font-semibold flex items-center gap-1 hover:bg-[#ebe0dd] active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">replay</span>
              <span>Revisar</span>
            </button>
          </div>
        </div>

        {/* Card 4: A Seguir */}
        <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#f0e6e2]">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="px-2 py-0.5 rounded-full bg-[#ffdbce] text-[#7f2b00] text-[11px] font-bold">
                  A seguir
                </span>
                <span className="text-[11px] text-[#57423b] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">timer</span> 40 min
                </span>
                <span className="text-[11px] text-[#57423b] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">article</span> Teoria + Casos
                </span>
              </div>
              <h4 className="text-[15px] font-bold text-[#1f1b19] mb-1">Gametogênese Humana e Anomalias</h4>
              <p className="text-[13px] text-[#57423b] line-clamp-1 mb-2">
                Espermatogênese, ovogênese, não-disjunções meióticas e síndromes cromossômicas.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-[#f6ece8]">
            <span className="text-[11px] text-[#57423b]">Sequência recomendada</span>
            <button
              onClick={() => onNavigate('conteudo-ciclo-celular')}
              className="h-8 px-3 rounded-lg bg-[#f0e6e2] text-[#1f1b19] text-[12px] font-semibold flex items-center gap-1 hover:bg-[#ebe0dd] active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">lock_open</span>
              <span>Começar</span>
            </button>
          </div>
        </div>

        {/* Card 5: Módulo 4 Disponível */}
        <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#f0e6e2]">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="px-2 py-0.5 rounded-full bg-[#f6ece8] text-[#57423b] text-[11px] font-semibold">
                  Disponível
                </span>
                <span className="text-[11px] text-[#57423b] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">timer</span> 50 min
                </span>
                <span className="text-[11px] text-[#57423b]">Módulo 4</span>
              </div>
              <h4 className="text-[15px] font-bold text-[#1f1b19] mb-1">Introdução à Genética: Leis de Mendel</h4>
              <p className="text-[13px] text-[#57423b] line-clamp-1 mb-2">
                Monohibridismo, quadros de Punnett, cruzamentos-teste e proporções fenotípicas.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-[#f6ece8]">
            <span className="text-[11px] text-[#57423b]">Pré-requisito cumprido</span>
            <button
              onClick={() => alert('Módulo 4: Leis de Mendel desbloqueado.')}
              className="h-8 px-3 rounded-lg bg-[#f0e6e2] text-[#1f1b19] text-[12px] font-semibold flex items-center gap-1 hover:bg-[#ebe0dd] active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">start</span>
              <span>Começar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Prática Rápida / Quiz Card */}
      <div className="px-5 mt-5">
        <div className="rounded-2xl bg-[#f6ece8] p-4 relative overflow-hidden border border-[#dec0b7]/50">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex-1">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ffdbce] text-[#7f2b00] text-[11px] font-bold mb-2">
                <span className="material-symbols-outlined text-[14px]">quiz</span>
                <span>Desafio Rápido</span>
              </div>
              <h3 className="text-[16px] font-bold text-[#1f1b19]">Quiz do Módulo 3: Mitose e Meiose</h3>
              <p className="text-[13px] text-[#57423b] mt-1 leading-snug">
                Teste sua retenção imediata com 10 questões comentadas selecionadas pela comunidade.
              </p>
            </div>
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#9f3c16] shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-[22px]">psychology</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3 text-[12px] text-[#57423b] font-medium">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-[#9f3c16]">format_list_numbered</span>
                10 itens
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-[#9e3d0c]">bolt</span>
                +45 XP
              </span>
            </div>
            <button
              onClick={() => onNavigate('quiz-ciclo-celular')}
              className="h-10 px-4 rounded-xl bg-[#9f3c16] text-white text-[13px] font-bold flex items-center gap-1.5 shadow-sm hover:opacity-95 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">sports_score</span>
              <span>Praticar Quiz</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
