import React, { useState } from 'react';
import { DISCIPLINES } from '../data/mockData';
import { ScreenType } from '../types';

interface DisciplinasScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

export const DisciplinasScreen: React.FC<DisciplinasScreenProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'progress' | 'completed'>('all');

  const filteredDisciplines = DISCIPLINES.filter((d) => {
    const matchesSearch =
      searchQuery === '' ||
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filter === 'all' ||
      (filter === 'progress' && d.progressPercent < 100) ||
      (filter === 'completed' && d.progressPercent === 100);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex flex-col w-full px-5 pb-8 gap-5 pt-2">
      {/* Search & Filter Controls */}
      <section className="flex flex-col gap-3.5 pt-1">
        {/* Live Study Presence Ribbon */}
        <div className="flex items-center justify-between bg-[#fcf1ee] px-4 py-2.5 rounded-xl shadow-xs border border-[#dec0b7]/40">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9f3c16] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#9f3c16]"></span>
            </span>
            <span className="text-[12px] text-[#57423b] font-medium">42 colegas estudando agora</span>
          </div>
          <div className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-full shadow-xs">
            <span className="material-symbols-outlined text-[15px] text-[#9e3d0c] fill">local_fire_department</span>
            <span className="text-[11px] text-[#1f1b19] font-bold">14 dias</span>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a726a] text-[20px] pointer-events-none">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar disciplinas ou temas..."
            className="w-full h-12 pl-10 pr-10 bg-white rounded-xl text-[14px] text-[#1f1b19] placeholder:text-[#8a726a]/70 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#9f3c16]/30 border border-[#dec0b7]/40 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a726a] hover:text-[#1f1b19] p-1"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
        </div>

        {/* Quick Status Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <button
            onClick={() => setFilter('all')}
            className={`flex items-center gap-1.5 px-4 h-9 rounded-full text-[12px] font-semibold transition-all shrink-0 ${
              filter === 'all'
                ? 'bg-[#9f3c16] text-white shadow-sm'
                : 'bg-[#f6ece8] text-[#57423b] hover:text-[#1f1b19]'
            }`}
          >
            <span>Todas</span>
            <span
              className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                filter === 'all' ? 'bg-white/20' : 'bg-[#ebe0dd]'
              }`}
            >
              5
            </span>
          </button>

          <button
            onClick={() => setFilter('progress')}
            className={`flex items-center gap-1.5 px-4 h-9 rounded-full text-[12px] font-semibold transition-all shrink-0 ${
              filter === 'progress'
                ? 'bg-[#9f3c16] text-white shadow-sm'
                : 'bg-[#f6ece8] text-[#57423b] hover:text-[#1f1b19]'
            }`}
          >
            <span>Em andamento</span>
            <span
              className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                filter === 'progress' ? 'bg-white/20' : 'bg-[#ebe0dd]'
              }`}
            >
              4
            </span>
          </button>

          <button
            onClick={() => setFilter('completed')}
            className={`flex items-center gap-1.5 px-4 h-9 rounded-full text-[12px] font-semibold transition-all shrink-0 ${
              filter === 'completed'
                ? 'bg-[#9f3c16] text-white shadow-sm'
                : 'bg-[#f6ece8] text-[#57423b] hover:text-[#1f1b19]'
            }`}
          >
            <span>Concluídas</span>
            <span
              className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                filter === 'completed' ? 'bg-white/20' : 'bg-[#ebe0dd]'
              }`}
            >
              1
            </span>
          </button>
        </div>
      </section>

      {/* Disciplines List */}
      <section className="flex flex-col gap-4">
        {filteredDisciplines.map((disc) => (
          <article
            key={disc.id}
            className="flex flex-col bg-white rounded-2xl p-4 shadow-sm transition-transform active:scale-[0.99] border border-[#f0e6e2]"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#f0e6e2] flex items-center justify-center text-[#9f3c16] shadow-xs shrink-0">
                  <span className="material-symbols-outlined text-[26px]">{disc.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-[18px] font-bold text-[#1f1b19] tracking-tight">{disc.title}</h2>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#f0e6e2] text-[#9f3c16] text-[11px] font-bold">
                      {disc.progressPercent}%
                    </span>
                  </div>
                  <p className="text-[13px] text-[#57423b] mt-0.5 leading-snug">{disc.subtitle}</p>
                </div>
              </div>
            </div>

            {/* Tag Badge if present */}
            {disc.tag && (
              <div className="mb-3">
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold ${
                    disc.tagType === 'quiz'
                      ? 'bg-[#ffd9dc] text-[#3f0211]'
                      : disc.tagType === 'practice'
                      ? 'bg-[#ffdbce] text-[#7f2b00]'
                      : disc.tagType === 'review'
                      ? 'bg-[#fe99a6]/30 text-[#792e3b]'
                      : 'bg-[#ffdbcf] text-[#822801]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {disc.tagType === 'quiz' ? 'quiz' : disc.tagType === 'practice' ? 'bolt' : 'history_edu'}
                  </span>
                  <span>{disc.tag}</span>
                </span>
              </div>
            )}

            {/* Progress Section */}
            <div className="bg-[#fcf1ee] rounded-xl p-3 mb-3">
              <div className="flex justify-between items-center mb-1.5 text-[12px]">
                <span className="text-[#57423b]">Progresso modular</span>
                <span className="text-[#1f1b19] font-semibold">
                  {disc.completedCount} de {disc.totalCount} conteúdos
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#ebe0dd] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#9f3c16] transition-all duration-500"
                  style={{ width: `${disc.progressPercent}%` }}
                ></div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => {
                if (disc.id === 'biologia') {
                  onNavigate('biologia-trilha');
                } else {
                  alert(`Abrindo trilha de ${disc.title} com conteúdos completos.`);
                }
              }}
              className="w-full h-11 rounded-xl bg-[#f6ece8] text-[#9f3c16] hover:bg-[#9f3c16] hover:text-white text-[13px] font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              <span>Ver conteúdos</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </article>
        ))}

        {filteredDisciplines.length === 0 && (
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl text-center shadow-sm my-4 border border-[#f0e6e2]">
            <div className="w-14 h-14 rounded-full bg-[#f0e6e2] flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[#8a726a] text-[28px]">menu_book</span>
            </div>
            <h3 className="text-[16px] text-[#1f1b19] font-bold mb-1">Nenhuma disciplina encontrada</h3>
            <p className="text-[13px] text-[#57423b] max-w-xs">
              Tente buscar por termos como "Genética", "Álgebra" ou "Termoquímica".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilter('all');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#f6ece8] text-[#9f3c16] text-[12px] font-semibold"
            >
              Limpar busca
            </button>
          </div>
        )}
      </section>

      {/* Motivational Warm Card */}
      <aside className="relative overflow-hidden bg-[#f0e6e2] rounded-2xl p-4 flex items-center gap-3 shadow-xs border border-[#dec0b7]/50">
        <div className="w-10 h-10 rounded-xl bg-[#9f3c16]/10 flex items-center justify-center shrink-0 text-[#9f3c16]">
          <span className="material-symbols-outlined text-[22px]">psychology</span>
        </div>
        <div className="flex flex-col min-w-0">
          <h3 className="text-[15px] font-bold text-[#1f1b19] truncate">Ciclo de Repetição Espaçada</h3>
          <p className="text-[13px] text-[#57423b]">Você tem 2 tópicos sugeridos para fixação hoje à tarde.</p>
        </div>
      </aside>
    </div>
  );
};
