import React, { useState } from 'react';
import { STUDY_GROUPS } from '../data/mockData';
import { ScreenType, StudyGroup } from '../types';

interface GruposScreenProps {
  onNavigate: (screen: ScreenType) => void;
  groups: StudyGroup[];
  onToggleJoin: (groupId: string) => void;
}

export const GruposScreen: React.FC<GruposScreenProps> = ({
  onNavigate,
  groups,
  onToggleJoin,
}) => {
  const [activeTab, setActiveTab] = useState<'my' | 'discover'>('my');
  const [discoverFilter, setDiscoverFilter] = useState('Todos');

  const myGroups = groups.filter((g) => g.isMember);
  const discoverGroups = groups.filter((g) => {
    if (discoverFilter === 'Todos') return true;
    return g.disciplines.some((d) => d.toLowerCase().includes(discoverFilter.toLowerCase()));
  });

  return (
    <div className="flex flex-col w-full pb-10">
      {/* Top Action & Selector Header */}
      <div className="px-5 pt-2 flex flex-col gap-4">
        {/* Top Bar with Action Button */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[11px] text-[#57423b] uppercase tracking-wider font-semibold">
              Espaços de Estudo
            </span>
            <h2 className="text-[20px] font-bold text-[#1f1b19] tracking-tight">
              Comunidades Ativas
            </h2>
          </div>
          <button
            onClick={() => onNavigate('criar-grupo')}
            className="h-11 px-4 rounded-xl bg-[#9f3c16] text-white text-[13px] font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition-all hover:bg-[#bf542c]"
          >
            <span className="material-symbols-outlined text-[19px]">add</span>
            <span>Criar Grupo</span>
          </button>
        </div>

        {/* Guiding Warm Pedagogical Banner */}
        <div className="rounded-2xl bg-[#fcf1ee] p-4 shadow-xs border border-[#dec0b7]/40 flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#ffdbcf] flex items-center justify-center shrink-0 text-[#9f3c16]">
            <span className="material-symbols-outlined text-[20px] fill">lightbulb</span>
          </div>
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[13px] font-bold text-[#1f1b19]">Estudo colaborativo com foco</span>
            <p className="text-[12px] text-[#57423b] leading-relaxed">
              Tire dúvidas, organize cronogramas e pratique em equipe com metas claras. Sem feeds infinitos ou métricas de vaidade.
            </p>
          </div>
        </div>

        {/* Segmented Tab Pill Selector */}
        <div className="w-full bg-[#f6ece8] rounded-xl p-1 flex items-center gap-1 border border-[#dec0b7]/40">
          <button
            onClick={() => setActiveTab('my')}
            className={`flex-1 py-2.5 rounded-lg text-[13px] font-bold transition-all duration-200 flex items-center justify-center gap-1.5 ${
              activeTab === 'my'
                ? 'bg-white text-[#9f3c16] shadow-sm'
                : 'text-[#57423b] hover:text-[#1f1b19]'
            }`}
          >
            <span>Meus Grupos</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                activeTab === 'my' ? 'bg-[#9f3c16]/10 text-[#9f3c16]' : 'bg-[#ebe0dd] text-[#57423b]'
              }`}
            >
              {myGroups.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('discover')}
            className={`flex-1 py-2.5 rounded-lg text-[13px] font-bold transition-all duration-200 flex items-center justify-center gap-1.5 ${
              activeTab === 'discover'
                ? 'bg-white text-[#9f3c16] shadow-sm'
                : 'text-[#57423b] hover:text-[#1f1b19]'
            }`}
          >
            <span>Descobrir</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                activeTab === 'discover' ? 'bg-[#9f3c16]/10 text-[#9f3c16]' : 'bg-[#ebe0dd] text-[#57423b]'
              }`}
            >
              {groups.length}
            </span>
          </button>
        </div>
      </div>

      {/* TAB CONTENT 1: MEUS GRUPOS */}
      {activeTab === 'my' && (
        <section className="px-5 pt-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9f3c16]"></span>
              <span className="text-[12px] font-bold text-[#1f1b19] uppercase tracking-wider">
                Salas em que participo
              </span>
            </div>
            <span className="text-[12px] text-[#57423b]">Próxima sessão: Hoje</span>
          </div>

          {/* Group 1: Maratona ENEM */}
          <article className="rounded-2xl bg-white p-4 shadow-sm border border-[#f0e6e2] flex flex-col gap-3.5 transition-transform">
            <div className="flex items-start justify-between gap-3">
              <div className="flex gap-3 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-[#ffd9dc] flex items-center justify-center shrink-0 text-[#3f0211]">
                  <span className="material-symbols-outlined text-[26px]">edit_note</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span className="px-2 py-0.5 rounded-full bg-[#f0e6e2] text-[#57423b] text-[11px] font-medium">
                      Biologia &amp; Redação
                    </span>
                  </div>
                  <h3 className="text-[16px] font-bold text-[#1f1b19] truncate">
                    Maratona ENEM &amp; Vestibulares
                  </h3>
                </div>
              </div>
              <span className="shrink-0 px-2.5 py-1 rounded-full bg-[#954551] text-white text-[11px] font-bold shadow-xs flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                Participando
              </span>
            </div>

            {/* Objective block */}
            <div className="p-3 rounded-xl bg-[#fcf1ee] flex flex-col gap-1.5 border border-[#dec0b7]/30">
              <div className="flex items-center gap-1.5 text-[#57423b]">
                <span className="material-symbols-outlined text-[16px] text-[#9e3d0c]">target</span>
                <span className="text-[12px] font-bold text-[#1f1b19]">Meta coletiva semanal</span>
              </div>
              <p className="text-[12px] text-[#57423b]">
                Resolução coletiva de 20 questões comentadas diárias com correção mútua.
              </p>
              {/* Progress mini visual */}
              <div className="w-full mt-1">
                <div className="flex justify-between items-center mb-1 text-[11px]">
                  <span className="text-[#57423b]">Meta do dia</span>
                  <span className="text-[#9f3c16] font-bold">14/20 questões</span>
                </div>
                <div className="w-full h-1.5 bg-[#ebe0dd] rounded-full overflow-hidden">
                  <div className="h-full bg-[#9f3c16] rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>

            {/* Member row & CTA */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-[#ffdbcf] text-[#390c00] flex items-center justify-center text-[10px] font-bold border-2 border-white">
                    MC
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#ffd9dc] text-[#3f0211] flex items-center justify-center text-[10px] font-bold border-2 border-white">
                    BR
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#ffdbce] text-[#370e00] flex items-center justify-center text-[10px] font-bold border-2 border-white">
                    +26
                  </div>
                </div>
                <span className="text-[12px] text-[#57423b]">28 estudantes</span>
              </div>

              <button
                onClick={() => onNavigate('grupo-detalhes')}
                className="h-10 px-4 rounded-xl bg-[#f6ece8] text-[#1f1b19] text-[13px] font-bold hover:bg-[#ebe0dd] active:scale-95 transition-all flex items-center gap-1"
              >
                <span>Ver Grupo</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </article>

          {/* Group 2: Algoritmos & Lógica */}
          <article className="rounded-2xl bg-white p-4 shadow-sm border border-[#f0e6e2] flex flex-col gap-3.5 transition-transform">
            <div className="flex items-start justify-between gap-3">
              <div className="flex gap-3 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-[#ffdbce] flex items-center justify-center shrink-0 text-[#370e00]">
                  <span className="material-symbols-outlined text-[26px]">terminal</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span className="px-2 py-0.5 rounded-full bg-[#f0e6e2] text-[#57423b] text-[11px] font-medium">
                      Programação &amp; CS
                    </span>
                  </div>
                  <h3 className="text-[16px] font-bold text-[#1f1b19] truncate">
                    Algoritmos &amp; Lógica
                  </h3>
                </div>
              </div>
              <span className="shrink-0 px-2.5 py-1 rounded-full bg-[#954551] text-white text-[11px] font-bold shadow-xs flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                Participando
              </span>
            </div>

            {/* Objective block */}
            <div className="p-3 rounded-xl bg-[#fcf1ee] flex flex-col gap-1.5 border border-[#dec0b7]/30">
              <div className="flex items-center gap-1.5 text-[#57423b]">
                <span className="material-symbols-outlined text-[16px] text-[#9e3d0c]">target</span>
                <span className="text-[12px] font-bold text-[#1f1b19]">Desafio semanal</span>
              </div>
              <p className="text-[12px] text-[#57423b]">
                Desafios práticos de código, revisão por pares e estudo de complexidade Big O.
              </p>
              {/* Live status hint */}
              <div className="flex items-center gap-2 mt-1 pt-1">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9e3d0c] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9e3d0c]"></span>
                </span>
                <span className="text-[11px] text-[#57423b] font-medium">3 membros programando agora</span>
              </div>
            </div>

            {/* Member row & CTA */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-[#ebe0dd] text-[#57423b] flex items-center justify-center text-[10px] font-bold border-2 border-white">
                    LA
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#ffb59c] text-[#390c00] flex items-center justify-center text-[10px] font-bold border-2 border-white">
                    GH
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#ffd9dc] text-[#3f0211] flex items-center justify-center text-[10px] font-bold border-2 border-white">
                    +13
                  </div>
                </div>
                <span className="text-[12px] text-[#57423b]">15 estudantes</span>
              </div>

              <button
                onClick={() => onNavigate('grupo-detalhes')}
                className="h-10 px-4 rounded-xl bg-[#f6ece8] text-[#1f1b19] text-[13px] font-bold hover:bg-[#ebe0dd] active:scale-95 transition-all flex items-center gap-1"
              >
                <span>Ver Grupo</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </article>
        </section>
      )}

      {/* TAB CONTENT 2: DESCOBRIR */}
      {activeTab === 'discover' && (
        <section className="px-5 pt-4 flex flex-col gap-4">
          {/* Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {['Todos', 'Exatas', 'Humanas', 'Saúde', 'CS'].map((cat) => (
              <button
                key={cat}
                onClick={() => setDiscoverFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold whitespace-nowrap transition-all ${
                  discoverFilter === cat
                    ? 'bg-[#9f3c16] text-white shadow-sm'
                    : 'bg-[#f6ece8] text-[#57423b] hover:bg-[#ebe0dd]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Groups list */}
          {discoverGroups.map((g) => (
            <article
              key={g.id}
              className="rounded-2xl bg-white p-4 shadow-sm border border-[#f0e6e2] flex flex-col gap-3.5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#ffdbcf] flex items-center justify-center shrink-0 text-[#9f3c16]">
                    <span className="material-symbols-outlined text-[26px]">{g.icon}</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="px-2 py-0.5 rounded-full bg-[#9f3c16]/10 text-[#9f3c16] text-[11px] font-bold">
                        {g.disciplines.join(' • ')}
                      </span>
                    </div>
                    <h3 className="text-[16px] font-bold text-[#1f1b19]">{g.name}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#57423b] text-[12px] bg-[#fcf1ee] px-2 py-1 rounded-md font-semibold">
                  <span className="material-symbols-outlined text-[16px] text-[#9e3d0c]">group</span>
                  <span>{g.membersCount}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#fcf1ee] flex flex-col gap-1.5 border border-[#dec0b7]/30">
                <div className="flex items-center gap-1.5 text-[#57423b]">
                  <span className="material-symbols-outlined text-[16px] text-[#9f3c16]">checklist</span>
                  <span className="text-[12px] font-bold text-[#1f1b19]">Cronograma ativo</span>
                </div>
                <p className="text-[12px] text-[#57423b] leading-relaxed">{g.weeklyGoal}</p>
                <div className="flex items-center gap-3 pt-1 text-[11px] text-[#57423b]">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-[#954551]">forum</span>
                    Mesa de dúvidas aberta
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-[#9f3c16]">calendar_month</span>
                    Encontros 2x/sem
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => onToggleJoin(g.id)}
                  className={`flex-1 h-11 rounded-xl text-[13px] font-bold active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-sm ${
                    g.isMember
                      ? 'bg-[#954551] text-white'
                      : 'bg-[#9f3c16] text-white hover:bg-[#bf542c]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {g.isMember ? 'check_circle' : 'group_add'}
                  </span>
                  <span>{g.isMember ? 'Participando!' : 'Participar do Grupo'}</span>
                </button>

                <button
                  onClick={() => onNavigate('grupo-detalhes')}
                  className="h-11 px-4 rounded-xl bg-[#f6ece8] text-[#1f1b19] text-[13px] font-semibold hover:bg-[#ebe0dd] active:scale-95 transition-all"
                >
                  Detalhes
                </button>
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  );
};
