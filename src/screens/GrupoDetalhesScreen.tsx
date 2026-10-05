import React, { useState } from 'react';
import { APP_IMAGES } from '../data/mockData';
import { ScreenType } from '../types';

interface GrupoDetalhesScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onBack: () => void;
}

export const GrupoDetalhesScreen: React.FC<GrupoDetalhesScreenProps> = ({ onNavigate, onBack }) => {
  const [isMember, setIsMember] = useState(true);
  const [notificationsActive, setNotificationsActive] = useState(true);
  const [showLeaveDialog, setShowLeaveDialog] = useState(false);

  return (
    <div className="flex flex-col w-full pb-10">
      {/* Top Navigation & Action Context */}
      <div className="flex items-center justify-between px-5 py-2">
        <button
          onClick={onBack}
          aria-label="Voltar para Grupos"
          className="w-10 h-10 -ml-2 rounded-full bg-[#f0e6e2] flex items-center justify-center text-[#1f1b19] hover:bg-[#ebe0dd] transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => alert('Link de convite para a turma copiado!')}
            aria-label="Compartilhar"
            className="w-10 h-10 rounded-full bg-[#f0e6e2] flex items-center justify-center text-[#1f1b19] hover:bg-[#ebe0dd] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">share</span>
          </button>
          <button
            aria-label="Opções do grupo"
            className="w-10 h-10 rounded-full bg-[#f0e6e2] flex items-center justify-center text-[#1f1b19] hover:bg-[#ebe0dd] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">more_vert</span>
          </button>
        </div>
      </div>

      <div className="px-5 flex flex-col gap-4">
        {/* Hero Header & Identity */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#f0e6e2]">
          <div className="flex items-start gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-[#9f3c16]/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#9f3c16] text-[28px]">biotech</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap gap-1.5 mb-1">
                <span className="bg-[#9f3c16]/10 text-[#9f3c16] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  Biologia
                </span>
                <span className="bg-[#fe99a6]/30 text-[#792e3b] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  Redação ENEM
                </span>
                <span className="bg-[#f0e6e2] text-[#57423b] text-[11px] px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  Ao vivo
                </span>
              </div>
              <h2 className="text-[20px] font-bold text-[#1f1b19] leading-tight">
                Maratona ENEM: Biologia &amp; Redação
              </h2>
            </div>
          </div>

          <p className="text-[13px] text-[#57423b] leading-relaxed mt-1">
            Grupo colaborativo e focado na resolução comentada de questões discursivas de Biologia Celular e temas semanais de redação nota 1000. Sem distrações ou feeds infinitos.
          </p>

          {/* Objetivo Coletivo */}
          <div className="mt-3 p-3 rounded-xl bg-[#fcf1ee] flex items-start gap-2.5 border border-[#dec0b7]/30">
            <div className="w-8 h-8 rounded-lg bg-[#bf5424]/15 flex items-center justify-center shrink-0 text-[#9e3d0c]">
              <span className="material-symbols-outlined text-[18px]">flag</span>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[12px] font-bold text-[#1f1b19] block">Meta da Semana</span>
              <p className="text-[12px] text-[#57423b] mt-0.5 leading-snug">
                Resolver coletivamente 20 questões diárias comentadas e produzir 1 redação corrigida por pares até o final da semana.
              </p>
            </div>
          </div>

          {/* Active Learners & Cadence */}
          <div className="mt-3 pt-3 flex items-center justify-between border-t border-[#f6ece8]">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white"
                  alt="Estudante"
                  src={APP_IMAGES.studentFemale1}
                />
                <img
                  className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white"
                  alt="Estudante"
                  src={APP_IMAGES.studentMale1}
                />
                <img
                  className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white"
                  alt="Estudante"
                  src={APP_IMAGES.studentFemale2}
                />
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#ffdbcf] text-[#390c00] text-[10px] font-bold ring-2 ring-white">
                  +25
                </div>
              </div>
              <div>
                <span className="text-[12px] font-bold text-[#1f1b19] block">28 estudantes</span>
                <span className="text-[11px] text-[#57423b]">ritmo constante</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0e6e2]">
              <span className="material-symbols-outlined text-[#9f3c16] text-[16px] fill">local_fire_department</span>
              <span className="text-[11px] font-bold text-[#1f1b19]">5 dias seguidos</span>
            </div>
          </div>
        </div>

        {/* Weekly Collective Progress Widget */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#f0e6e2]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#9f3c16] text-[20px]">trending_up</span>
              <h3 className="text-[15px] font-bold text-[#1f1b19]">Ritmo Coletivo Semanal</h3>
            </div>
            <span className="text-[12px] font-bold text-[#9f3c16]">70% concluído</span>
          </div>

          <div className="w-full bg-[#f6ece8] rounded-full h-2.5 overflow-hidden">
            <div className="bg-[#9f3c16] h-full rounded-full transition-all duration-500" style={{ width: '70%' }}></div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 mt-3">
            <div className="bg-[#fcf1ee] p-2.5 rounded-xl flex flex-col">
              <span className="text-[11px] text-[#57423b]">Questões de Hoje</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-[18px] font-bold text-[#1f1b19]">14</span>
                <span className="text-[12px] text-[#57423b]">/ 20</span>
              </div>
              <div className="w-full bg-[#ebe0dd] h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#9e3d0c] h-full rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>

            <div className="bg-[#fcf1ee] p-2.5 rounded-xl flex flex-col">
              <span className="text-[11px] text-[#57423b]">Redações Enviadas</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-[18px] font-bold text-[#1f1b19]">19</span>
                <span className="text-[12px] text-[#57423b]">/ 28</span>
              </div>
              <div className="w-full bg-[#ebe0dd] h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#954551] h-full rounded-full" style={{ width: '68%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Content / Study Decks */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <h3 className="text-[16px] font-bold text-[#1f1b19]">Conteúdos Conectados</h3>
            <span className="text-[11px] text-[#57423b]">3 trilhas ativas</span>
          </div>

          <div className="flex flex-col gap-2">
            {/* Item 1 */}
            <div
              onClick={() => onNavigate('conteudo-ciclo-celular')}
              className="bg-white p-3.5 rounded-xl shadow-xs border border-[#f0e6e2] flex items-center justify-between cursor-pointer active:scale-[0.99] transition-transform"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#ffdbcf] flex items-center justify-center text-[#390c00] shrink-0">
                  <span className="material-symbols-outlined text-[22px]">scatter_plot</span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#f0e6e2] text-[#1f1b19]">
                      Em andamento
                    </span>
                    <span className="text-[11px] text-[#57423b]">12 questões</span>
                  </div>
                  <h4 className="text-[14px] font-bold text-[#1f1b19] truncate">
                    Ciclo Celular: Mitose e Meiose
                  </h4>
                  <span className="text-[12px] text-[#9f3c16] flex items-center gap-0.5 mt-0.5 font-medium">
                    Ver conteúdo relacionado
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div
              onClick={() => alert('Abrindo trilha de Genética Molecular e Síntese Proteica...')}
              className="bg-white p-3.5 rounded-xl shadow-xs border border-[#f0e6e2] flex items-center justify-between cursor-pointer active:scale-[0.99] transition-transform"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#ffdbce] flex items-center justify-center text-[#370e00] shrink-0">
                  <span className="material-symbols-outlined text-[22px]">strikethrough_s</span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#ffd9dc] text-[#3f0211]">
                      Próximo tema
                    </span>
                    <span className="text-[11px] text-[#57423b]">8 flashcards</span>
                  </div>
                  <h4 className="text-[14px] font-bold text-[#1f1b19] truncate">
                    Genética Molecular &amp; Síntese Proteica
                  </h4>
                  <span className="text-[12px] text-[#9f3c16] flex items-center gap-0.5 mt-0.5 font-medium">
                    Ver conteúdo relacionado
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div
              onClick={() => alert('Abrindo Guia de Redação ENEM Nota 1000...')}
              className="bg-white p-3.5 rounded-xl shadow-xs border border-[#f0e6e2] flex items-center justify-between cursor-pointer active:scale-[0.99] transition-transform"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#fe99a6]/30 flex items-center justify-center text-[#792e3b] shrink-0">
                  <span className="material-symbols-outlined text-[22px]">history_edu</span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#f0e6e2] text-[#1f1b19]">
                      Redação Semanal
                    </span>
                    <span className="text-[11px] text-[#57423b]">Guia prático</span>
                  </div>
                  <h4 className="text-[14px] font-bold text-[#1f1b19] truncate">
                    Estrutura da Dissertação Argumentativa
                  </h4>
                  <span className="text-[12px] text-[#9f3c16] flex items-center gap-0.5 mt-0.5 font-medium">
                    Ver conteúdo relacionado
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discussion Topics / Help Lounge */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#954551] text-[20px]">forum</span>
              <h3 className="text-[16px] font-bold text-[#1f1b19]">Sala de Dúvidas &amp; Tópicos</h3>
            </div>
            <button
              onClick={() => alert('Criar novo tópico de discussão...')}
              className="text-[12px] text-[#9f3c16] font-semibold hover:underline"
            >
              Novo tópico
            </button>
          </div>

          <div className="flex flex-col gap-2.5">
            {/* Topic 1 */}
            <div className="bg-white p-3.5 rounded-xl shadow-xs border border-[#f0e6e2]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">check_circle</span>
                  Resolvido
                </span>
                <span className="text-[11px] text-[#57423b]">há 2h</span>
              </div>
              <h4 className="text-[14px] font-bold text-[#1f1b19]">
                Dúvidas conceituais: Meiose I vs Meiose II
              </h4>
              <p className="text-[12px] text-[#57423b] mt-1 line-clamp-2 leading-relaxed">
                Alguém tem uma analogia clara para memorizar a disjunção cromossômica e onde ocorre o crossing-over de forma rápida?
              </p>
              <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#f6ece8]">
                <span className="text-[11px] text-[#57423b] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">comment</span> 14 contribuições
                </span>
                <button
                  onClick={() => alert('Visualizando respostas dos colegas.')}
                  className="text-[11px] text-[#9f3c16] font-bold hover:underline"
                >
                  Ver resolução
                </button>
              </div>
            </div>

            {/* Topic 2 */}
            <div className="bg-white p-3.5 rounded-xl shadow-xs border border-[#f0e6e2]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#ffdbce] text-[#7f2b00] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">pending</span>
                  Em debate
                </span>
                <span className="text-[11px] text-[#57423b]">há 4h</span>
              </div>
              <h4 className="text-[14px] font-bold text-[#1f1b19]">
                Dicas de repertório sociocultural para IA na saúde
              </h4>
              <p className="text-[12px] text-[#57423b] mt-1 line-clamp-2 leading-relaxed">
                Reunindo pensadores contemporâneos e dados do SUS sobre inovação médica para a redação desta semana.
              </p>
              <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#f6ece8]">
                <span className="text-[11px] text-[#57423b] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">comment</span> 8 referências
                </span>
                <button
                  onClick={() => alert('Entrando no debate da redação.')}
                  className="text-[11px] text-[#9f3c16] font-bold hover:underline"
                >
                  Participar
                </button>
              </div>
            </div>

            {/* Topic 3 */}
            <div className="bg-white p-3.5 rounded-xl shadow-xs border border-[#f0e6e2]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#f0e6e2] text-[#1f1b19] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">attachment</span>
                  Material fixado
                </span>
                <span className="text-[11px] text-[#57423b]">ontem</span>
              </div>
              <h4 className="text-[14px] font-bold text-[#1f1b19]">
                Compilado de mapas mentais do módulo de Citologia
              </h4>
              <p className="text-[12px] text-[#57423b] mt-1 line-clamp-2 leading-relaxed">
                PDF colaborativo com sínteses visuais produzidas pelos membros antes do simulado de sábado.
              </p>
              <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#f6ece8]">
                <span className="text-[11px] text-[#57423b] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">download</span> 28 downloads
                </span>
                <button
                  onClick={() => alert('Iniciando download do PDF de Citologia...')}
                  className="text-[11px] text-[#9f3c16] font-bold hover:underline"
                >
                  Baixar resumo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Participation Status & Actions */}
        <div className="mt-2 bg-white p-3.5 rounded-2xl shadow-xs border border-[#f0e6e2] flex flex-col gap-3">
          {isMember ? (
            <>
              <div className="flex items-center justify-between p-2.5 bg-[#fcf1ee] rounded-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#9f3c16]/10 flex items-center justify-center text-[#9f3c16]">
                    <span className="material-symbols-outlined text-[20px] fill">check_circle</span>
                  </div>
                  <div>
                    <span className="text-[14px] font-bold text-[#1f1b19] block">Membro Ativo</span>
                    <span className="text-[11px] text-[#57423b]">Você já participa deste grupo</span>
                  </div>
                </div>
                <button
                  onClick={() => setNotificationsActive(!notificationsActive)}
                  className={`h-9 px-3 rounded-full text-[12px] font-semibold transition-all ${
                    notificationsActive
                      ? 'bg-[#f0e6e2] text-[#1f1b19]'
                      : 'bg-[#ebe0dd] text-[#57423b] opacity-60'
                  }`}
                >
                  {notificationsActive ? 'Notificações ativas' : 'Notificações pausadas'}
                </button>
              </div>

              <div className="flex items-center justify-center pt-1">
                <button
                  onClick={() => setShowLeaveDialog(true)}
                  className="px-4 py-2 rounded-full text-[#954551] hover:bg-[#ffd9dc]/30 text-[12px] font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[18px]">logout</span>
                  <span>Sair do grupo</span>
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-between p-2.5 bg-[#fcf1ee] rounded-xl">
              <div>
                <span className="text-[14px] font-bold text-[#1f1b19] block">Você saiu deste grupo</span>
                <span className="text-[11px] text-[#57423b]">Deseja ingressar novamente?</span>
              </div>
              <button
                onClick={() => setIsMember(true)}
                className="h-9 px-4 rounded-xl bg-[#9f3c16] text-white text-[12px] font-bold active:scale-95 transition-all"
              >
                Entrar
              </button>
            </div>
          )}

          {/* Dynamic Confirmation Prompt */}
          {showLeaveDialog && (
            <div className="p-3 bg-[#ffdad6] text-[#93000a] rounded-xl flex flex-col gap-2">
              <p className="text-[12px] text-center">
                Tem certeza que deseja sair do grupo? Seu progresso colaborativo da semana será pausado.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowLeaveDialog(false)}
                  className="flex-1 py-1.5 bg-white text-[#1f1b19] rounded-lg text-[12px] font-semibold"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    setIsMember(false);
                    setShowLeaveDialog(false);
                  }}
                  className="flex-1 py-1.5 bg-[#ba1a1a] text-white rounded-lg text-[12px] font-bold"
                >
                  Confirmar saída
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
