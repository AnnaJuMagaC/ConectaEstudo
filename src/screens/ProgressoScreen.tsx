import React, { useState } from 'react';
import { APP_IMAGES } from '../data/mockData';
import { ScreenType, UserProfile } from '../types';

interface ProgressoScreenProps {
  onNavigate: (screen: ScreenType) => void;
  user: UserProfile;
}

export const ProgressoScreen: React.FC<ProgressoScreenProps> = ({ onNavigate, user }) => {
  const [timeFilter, setTimeFilter] = useState<'week' | 'month' | 'all'>('week');

  const getMetrics = () => {
    switch (timeFilter) {
      case 'month':
        return {
          hours: '64h 10m',
          hoursDelta: '+12h vs. mês anterior',
          items: '118 itens',
          accuracy: '88%',
          streak: `${user.streakDays} dias`,
        };
      case 'all':
        return {
          hours: '240h 30m',
          hoursDelta: 'Total acumulado',
          items: '342 itens',
          accuracy: '86%',
          streak: `${user.streakDays} dias`,
        };
      case 'week':
      default:
        return {
          hours: user.totalHours,
          hoursDelta: '+2.5h vs. semana anterior',
          items: `${user.completedModules} itens`,
          accuracy: `${user.accuracyRate}%`,
          streak: `${user.streakDays} dias`,
        };
    }
  };

  const metrics = getMetrics();

  return (
    <div className="flex flex-col w-full px-5 pb-10 gap-5 pt-1">
      {/* Header Context & Timeframe Filter */}
      <section className="flex flex-col gap-3 pt-1">
        <div className="flex flex-col">
          <span className="text-[12px] font-semibold text-[#9f3c16] uppercase tracking-wider">
            Desempenho &amp; Foco
          </span>
          <h2 className="text-[22px] font-bold text-[#1f1b19] tracking-tight">
            Meu Progresso de Estudos
          </h2>
          <p className="text-[13px] text-[#57423b] mt-0.5">
            Acompanhe seu ritmo de aprendizado com clareza e acolhimento.
          </p>
        </div>

        {/* Segmented Time Filter */}
        <div className="inline-flex p-1 bg-[#f6ece8] rounded-full w-full justify-between shadow-xs border border-[#dec0b7]/40">
          <button
            onClick={() => setTimeFilter('week')}
            className={`flex-1 py-2 px-3 rounded-full text-[12px] font-semibold text-center transition-all ${
              timeFilter === 'week'
                ? 'bg-[#9f3c16] text-white shadow-xs'
                : 'text-[#57423b] hover:text-[#1f1b19]'
            }`}
          >
            Esta Semana
          </button>
          <button
            onClick={() => setTimeFilter('month')}
            className={`flex-1 py-2 px-3 rounded-full text-[12px] font-semibold text-center transition-all ${
              timeFilter === 'month'
                ? 'bg-[#9f3c16] text-white shadow-xs'
                : 'text-[#57423b] hover:text-[#1f1b19]'
            }`}
          >
            Este Mês
          </button>
          <button
            onClick={() => setTimeFilter('all')}
            className={`flex-1 py-2 px-3 rounded-full text-[12px] font-semibold text-center transition-all ${
              timeFilter === 'all'
                ? 'bg-[#9f3c16] text-white shadow-xs'
                : 'text-[#57423b] hover:text-[#1f1b19]'
            }`}
          >
            Geral
          </button>
        </div>
      </section>

      {/* Principal KPIs Grid */}
      <section className="grid grid-cols-2 gap-3">
        {/* Card 1: Horas Dedicadas */}
        <div className="bg-white rounded-2xl p-4 flex flex-col justify-between shadow-xs border border-[#f0e6e2]">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-[#57423b]">Tempo Total</span>
            <div className="w-8 h-8 rounded-full bg-[#f6ece8] flex items-center justify-center text-[#9f3c16]">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
            </div>
          </div>
          <div className="mt-2.5">
            <span className="text-[20px] text-[#1f1b19] font-bold tracking-tight font-mono">
              {metrics.hours}
            </span>
            <div className="flex items-center gap-1 mt-1 text-[#9f3c16]">
              <span className="material-symbols-outlined text-[15px]">trending_up</span>
              <span className="text-[11px] font-semibold">{metrics.hoursDelta}</span>
            </div>
          </div>
        </div>

        {/* Card 2: Conteúdos Concluídos */}
        <div className="bg-white rounded-2xl p-4 flex flex-col justify-between shadow-xs border border-[#f0e6e2]">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-[#57423b]">Concluídos</span>
            <div className="w-8 h-8 rounded-full bg-[#f6ece8] flex items-center justify-center text-[#954551]">
              <span className="material-symbols-outlined text-[18px]">task_alt</span>
            </div>
          </div>
          <div className="mt-2.5">
            <span className="text-[20px] text-[#1f1b19] font-bold tracking-tight font-mono">
              {metrics.items}
            </span>
            <p className="text-[11px] text-[#57423b] mt-1">módulos e leituras</p>
          </div>
        </div>

        {/* Card 3: Aproveitamento em Quizzes */}
        <div className="bg-white rounded-2xl p-4 flex flex-col justify-between shadow-xs border border-[#f0e6e2]">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-[#57423b]">Aproveitamento</span>
            <div className="w-8 h-8 rounded-full bg-[#ffdbce] flex items-center justify-center text-[#9e3d0c]">
              <span className="material-symbols-outlined text-[18px]">psychology</span>
            </div>
          </div>
          <div className="mt-2.5">
            <span className="text-[20px] text-[#1f1b19] font-bold tracking-tight font-mono">
              {metrics.accuracy}
            </span>
            <p className="text-[11px] text-[#57423b] mt-1">média de acertos</p>
          </div>
        </div>

        {/* Card 4: Ofensiva Ativa */}
        <div className="bg-[#954551] text-white rounded-2xl p-4 flex flex-col justify-between shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-[#ffd9dc]">Ofensiva</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[#ffd9dc]">
              <span className="material-symbols-outlined text-[18px] fill">local_fire_department</span>
            </div>
          </div>
          <div className="mt-2.5">
            <span className="text-[20px] font-bold">{metrics.streak}</span>
            <p className="text-[11px] text-[#ffd9dc] mt-1">Constância diária!</p>
          </div>
        </div>
      </section>

      {/* Recomendações e Próximo Passo */}
      <section className="bg-[#fcf1ee] rounded-2xl p-4 flex flex-col gap-2.5 shadow-xs border border-[#dec0b7]/40 relative">
        <div className="flex items-center gap-1.5 text-[#9f3c16]">
          <span className="material-symbols-outlined text-[18px]">assistant</span>
          <span className="text-[11px] font-bold uppercase tracking-wider">
            Próximo passo recomendado
          </span>
        </div>

        <div className="flex gap-3 items-center">
          <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-xs border border-[#dec0b7]/50 bg-white">
            <img
              alt="Mesa de estudos com livro de biologia"
              className="w-full h-full object-cover"
              src={APP_IMAGES.studyDesk}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[15px] font-bold text-[#1f1b19] leading-snug">
              Ciclo Celular: Mitose
            </p>
            <p className="text-[12px] text-[#57423b] mt-0.5 leading-tight">
              Falta apenas esta aula para concluir o módulo completo de Biologia!
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('conteudo-ciclo-celular')}
          className="mt-1 w-full bg-[#9f3c16] text-white h-11 rounded-xl text-[13px] font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-[#bf542c] active:scale-[0.98] transition-all"
        >
          <span>Continuar estudando</span>
          <span className="material-symbols-outlined text-[20px]">play_circle</span>
        </button>
      </section>

      {/* Progresso por Disciplina */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-bold text-[#1f1b19]">Progresso por Disciplina</h3>
          <span className="text-[11px] text-[#57423b]">4 ativas</span>
        </div>

        <div className="flex flex-col gap-2.5">
          {/* Biologia */}
          <div className="bg-white rounded-2xl p-4 flex flex-col gap-2 shadow-xs border border-[#f0e6e2]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#9f3c16]/10 flex items-center justify-center text-[#9f3c16]">
                  <span className="material-symbols-outlined text-[18px]">biotech</span>
                </div>
                <span className="text-[15px] font-bold text-[#1f1b19]">Biologia</span>
              </div>
              <span className="text-[13px] font-bold text-[#9f3c16]">82%</span>
            </div>
            <div className="w-full h-2 bg-[#f6ece8] rounded-full overflow-hidden">
              <div className="h-full bg-[#9f3c16] rounded-full" style={{ width: '82%' }}></div>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-[12px] text-[#57423b]">18/22 conteúdos concluídos</span>
              <button
                onClick={() => onNavigate('biologia-trilha')}
                className="text-[12px] font-semibold text-[#9f3c16] hover:underline flex items-center gap-0.5"
              >
                <span>Ver conteúdos</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>

          {/* História */}
          <div className="bg-white rounded-2xl p-4 flex flex-col gap-2 shadow-xs border border-[#f0e6e2]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#954551]/10 flex items-center justify-center text-[#954551]">
                  <span className="material-symbols-outlined text-[18px]">history_edu</span>
                </div>
                <span className="text-[15px] font-bold text-[#1f1b19]">História</span>
              </div>
              <span className="text-[13px] font-bold text-[#954551]">85%</span>
            </div>
            <div className="w-full h-2 bg-[#f6ece8] rounded-full overflow-hidden">
              <div className="h-full bg-[#954551] rounded-full" style={{ width: '85%' }}></div>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-[12px] text-[#57423b]">12/14 conteúdos concluídos</span>
              <button
                onClick={() => alert('Abrindo trilha de História Geral')}
                className="text-[12px] font-semibold text-[#954551] hover:underline flex items-center gap-0.5"
              >
                <span>Ver conteúdos</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Programação */}
          <div className="bg-white rounded-2xl p-4 flex flex-col gap-2 shadow-xs border border-[#f0e6e2]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#bf5424]/15 flex items-center justify-center text-[#bf5424]">
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                </div>
                <span className="text-[15px] font-bold text-[#1f1b19]">Programação</span>
              </div>
              <span className="text-[13px] font-bold text-[#bf5424]">60%</span>
            </div>
            <div className="w-full h-2 bg-[#f6ece8] rounded-full overflow-hidden">
              <div className="h-full bg-[#bf5424] rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-[12px] text-[#57423b]">9/15 conteúdos concluídos</span>
              <button
                onClick={() => alert('Abrindo trilha de Programação & Algoritmos')}
                className="text-[12px] font-semibold text-[#bf5424] hover:underline flex items-center gap-0.5"
              >
                <span>Ver conteúdos</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Matemática */}
          <div className="bg-white rounded-2xl p-4 flex flex-col gap-2 shadow-xs border border-[#f0e6e2]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#ffb59c]/40 flex items-center justify-center text-[#9f3c16]">
                  <span className="material-symbols-outlined text-[18px]">calculate</span>
                </div>
                <span className="text-[15px] font-bold text-[#1f1b19]">Matemática</span>
              </div>
              <span className="text-[13px] font-bold text-[#57423b]">45%</span>
            </div>
            <div className="w-full h-2 bg-[#f6ece8] rounded-full overflow-hidden">
              <div className="h-full bg-[#ffb59c]" style={{ width: '45%' }}></div>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-[12px] text-[#57423b]">8/18 conteúdos concluídos</span>
              <button
                onClick={() => alert('Abrindo trilha de Matemática')}
                className="text-[12px] font-semibold text-[#9f3c16] hover:underline flex items-center gap-0.5"
              >
                <span>Ver conteúdos</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Últimas Atividades Realizadas */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-bold text-[#1f1b19]">Últimas Atividades Realizadas</h3>
          <span className="material-symbols-outlined text-[#57423b] text-[20px]">history</span>
        </div>

        <div className="flex flex-col gap-2.5">
          {/* Atividade 1 */}
          <div className="bg-white rounded-2xl p-3.5 flex flex-col gap-2 shadow-xs border border-[#f0e6e2]">
            <div className="flex items-start justify-between gap-2">
              <div className="flex gap-2.5 items-center">
                <div className="w-10 h-10 rounded-xl bg-[#f6ece8] flex items-center justify-center text-[#9f3c16] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">quiz</span>
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#1f1b19]">Quiz de Meiose</h4>
                  <span className="text-[12px] text-[#57423b]">Biologia celular • Ontem</span>
                </div>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] bg-[#f6ece8] font-bold text-[#9f3c16]">
                90%
              </span>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-[#f6ece8]">
              <span className="text-[12px] text-[#57423b] font-medium">9/10 acertos</span>
              <button
                onClick={() => onNavigate('resultado-quiz')}
                className="h-8 px-3 rounded-lg bg-[#f6ece8] text-[#1f1b19] hover:bg-[#ebe0dd] text-[12px] font-semibold flex items-center gap-1"
              >
                <span>Ver resultado</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Atividade 2 */}
          <div className="bg-white rounded-2xl p-3.5 flex flex-col gap-2 shadow-xs border border-[#f0e6e2]">
            <div className="flex items-start justify-between gap-2">
              <div className="flex gap-2.5 items-center">
                <div className="w-10 h-10 rounded-xl bg-[#f6ece8] flex items-center justify-center text-[#bf5424] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">code_blocks</span>
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#1f1b19]">Prática de Lógica Condicional</h4>
                  <span className="text-[12px] text-[#57423b]">Programação • Há 3 dias</span>
                </div>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] bg-[#f6ece8] font-bold text-[#bf5424]">
                80%
              </span>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-[#f6ece8]">
              <span className="text-[12px] text-[#57423b] font-medium">8/10 acertos</span>
              <button
                onClick={() => alert('Exibindo relatório da atividade de Lógica')}
                className="h-8 px-3 rounded-lg bg-[#f6ece8] text-[#1f1b19] hover:bg-[#ebe0dd] text-[12px] font-semibold flex items-center gap-1"
              >
                <span>Ver resultado</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Motivational Banner */}
      <div className="rounded-2xl p-4 bg-[#ffd9dc] text-[#3f0211] flex items-center gap-3 border border-[#dec0b7]/40 shadow-xs">
        <div className="w-10 h-10 rounded-full bg-[#954551] flex items-center justify-center text-white shrink-0 shadow-xs">
          <span className="material-symbols-outlined text-[20px] fill">workspace_premium</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[14px] font-bold text-[#3f0211] leading-snug">Ritmo Imparável!</span>
          <span className="text-[12px] text-[#782e3a]">Você atingiu 80% da sua meta semanal antes do prazo.</span>
        </div>
      </div>
    </div>
  );
};
