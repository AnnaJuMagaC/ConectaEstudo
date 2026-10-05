import React, { useState } from 'react';
import { APP_IMAGES } from '../data/mockData';
import { ScreenType, UserProfile } from '../types';

interface InicioScreenProps {
  onNavigate: (screen: ScreenType) => void;
  user: UserProfile;
}

export const InicioScreen: React.FC<InicioScreenProps> = ({ onNavigate, user }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');

  const openQuickModal = (title: string, desc: string) => {
    setModalTitle(title);
    setModalDescription(desc);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col w-full px-5 pb-8 gap-6 pt-2">
      {/* Brand Header & Greeting */}
      <div className="flex flex-col gap-2 pt-1">
        <div className="flex items-center justify-between">
          <div className="h-10 flex items-center">
            <img
              alt="Logo Conecta Estudo"
              className="h-9 w-auto object-contain object-left rounded-md"
              src={APP_IMAGES.logoSquare}
            />
          </div>
          {/* Collaborative Presence Pill */}
          <div className="flex items-center gap-1.5 bg-[#fcf1ee] px-2.5 py-1 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#4E7A4A] animate-pulse"></span>
            <span className="text-[11px] font-medium text-[#57423b]">18 online</span>
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-1">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-semibold text-[#9f3c16] tracking-wide uppercase">
              Bem-vinda de volta
            </span>
            {/* Streak Pill */}
            <button
              onClick={() => openQuickModal('🔥 7 Dias de Ofensiva!', 'Parabéns pela consistência diária nos estudos! Completando o quiz de hoje você desbloqueia o 8º dia consecutivo.')}
              className="inline-flex items-center gap-1 bg-[#954551] text-[#ffd9dc] px-2.5 py-1 rounded-full shadow-sm transform active:scale-95 transition-transform"
            >
              <span className="text-sm">🔥</span>
              <span className="text-[11px] font-bold tracking-tight">{user.streakDays} dias seguidos</span>
            </button>
          </div>
          <h2 className="text-[24px] font-bold text-[#1f1b19] leading-tight">
            Olá, {user.name.split(' ')[0]}!<br />
            <span className="text-[16px] text-[#57423b] font-normal">Pronta para focar hoje?</span>
          </h2>
        </div>
      </div>

      {/* Hero Study Action Card */}
      <section className="flex flex-col gap-1">
        <div className="relative overflow-hidden bg-[#FAF0EB] rounded-2xl p-4 shadow-md flex flex-col gap-4 border border-[#dec0b7]/40">
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#9f3c16]/10 blur-2xl pointer-events-none"></div>
          
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9f3c16]"></span>
              <span className="text-[11px] text-[#9f3c16] font-bold uppercase tracking-wider">
                Em Andamento
              </span>
            </div>
            <span className="text-[11px] text-[#57423b]">Ciclo Celular</span>
          </div>

          <div className="flex flex-col gap-0.5 relative z-10">
            <span className="text-[11px] text-[#57423b] font-medium">Biologia Celular • Módulo 3</span>
            <h3 className="text-[18px] text-[#1f1b19] font-bold leading-snug">
              Ciclo Celular: Mitose e Meiose
            </h3>
          </div>

          {/* Dynamic Progress Status */}
          <div className="flex flex-col gap-1.5 bg-white p-3 rounded-xl shadow-sm relative z-10">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#1f1b19] font-semibold">68% concluído</span>
              <span className="text-[#57423b]">3 de 5 tópicos</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#f6ece8] overflow-hidden">
              <div
                className="h-full bg-[#9f3c16] rounded-full transition-all duration-700 ease-out"
                style={{ width: '68%' }}
              ></div>
            </div>
            <div className="flex items-center gap-1 mt-0.5 text-[#57423b]">
              <span className="material-symbols-outlined text-[16px] text-[#9e3d0c]">check_circle</span>
              <span className="text-[13px]">
                Próximo passo: <strong className="text-[#1f1b19] font-medium">Praticar 5 questões de fixação</strong>
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => onNavigate('conteudo-ciclo-celular')}
            className="w-full h-12 bg-[#9f3c16] text-white rounded-xl text-[14px] font-semibold flex items-center justify-center gap-2 shadow-md hover:opacity-95 active:scale-[0.98] transition-all relative z-10"
          >
            <span className="material-symbols-outlined text-[20px]">play_arrow</span>
            <span>Continuar estudando</span>
          </button>
        </div>
      </section>

      {/* My Subjects */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#9f3c16] text-[20px]">category</span>
            <h3 className="text-[16px] text-[#1f1b19] font-bold">Minhas Disciplinas</h3>
          </div>
          <button
            onClick={() => onNavigate('disciplinas')}
            className="inline-flex items-center gap-0.5 text-[#9f3c16] text-[12px] font-semibold hover:opacity-80 active:translate-x-0.5 transition-all"
          >
            <span>Ver todas</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Biologia */}
          <div
            onClick={() => onNavigate('biologia-trilha')}
            className="bg-white p-3.5 rounded-xl shadow-sm flex flex-col justify-between min-h-[120px] active:scale-[0.98] transition-transform cursor-pointer border border-[#f0e6e2] hover:border-[#9f3c16]/30"
          >
            <div className="flex items-start justify-between">
              <div className="w-8 h-8 rounded-lg bg-[#4E7A4A]/15 text-[#4E7A4A] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">psychiatry</span>
              </div>
              <span className="text-[11px] font-bold text-[#4E7A4A] bg-[#4E7A4A]/10 px-2 py-0.5 rounded-full">
                82%
              </span>
            </div>
            <div className="flex flex-col mt-2">
              <h4 className="text-[16px] text-[#1f1b19] font-bold truncate">Biologia</h4>
              <span className="text-[13px] text-[#57423b]">12 conteúdos</span>
              <div className="w-full h-1.5 bg-[#f6ece8] rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-[#4E7A4A] rounded-full" style={{ width: '82%' }}></div>
              </div>
            </div>
          </div>

          {/* Matemática */}
          <div
            onClick={() => openQuickModal('Matemática', 'Módulo ativo: Funções Quadráticas e Trigonometria. 8 de 18 conteúdos concluídos.')}
            className="bg-white p-3.5 rounded-xl shadow-sm flex flex-col justify-between min-h-[120px] active:scale-[0.98] transition-transform cursor-pointer border border-[#f0e6e2] hover:border-[#9f3c16]/30"
          >
            <div className="flex items-start justify-between">
              <div className="w-8 h-8 rounded-lg bg-[#9f3c16]/10 text-[#9f3c16] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">calculate</span>
              </div>
              <span className="text-[11px] font-bold text-[#9f3c16] bg-[#9f3c16]/10 px-2 py-0.5 rounded-full">
                45%
              </span>
            </div>
            <div className="flex flex-col mt-2">
              <h4 className="text-[16px] text-[#1f1b19] font-bold truncate">Matemática</h4>
              <span className="text-[13px] text-[#57423b]">16 conteúdos</span>
              <div className="w-full h-1.5 bg-[#f6ece8] rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-[#9f3c16] rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>

          {/* História Geral */}
          <div
            onClick={() => openQuickModal('História Geral', 'Módulo ativo: Brasil República e Era Vargas. 12 de 14 conteúdos concluídos.')}
            className="bg-white p-3.5 rounded-xl shadow-sm flex flex-col justify-between min-h-[120px] active:scale-[0.98] transition-transform cursor-pointer border border-[#f0e6e2] hover:border-[#9f3c16]/30"
          >
            <div className="flex items-start justify-between">
              <div className="w-8 h-8 rounded-lg bg-[#954551]/15 text-[#954551] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">history_edu</span>
              </div>
              <span className="text-[11px] font-bold text-[#954551] bg-[#954551]/10 px-2 py-0.5 rounded-full">
                90%
              </span>
            </div>
            <div className="flex flex-col mt-2">
              <h4 className="text-[16px] text-[#1f1b19] font-bold truncate">História Geral</h4>
              <span className="text-[13px] text-[#57423b]">9 conteúdos</span>
              <div className="w-full h-1.5 bg-[#f6ece8] rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-[#954551] rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>

          {/* Programação */}
          <div
            onClick={() => openQuickModal('Programação', 'Módulo ativo: Estrutura de Dados e Lógica de Algoritmos. 9 de 15 conteúdos concluídos.')}
            className="bg-white p-3.5 rounded-xl shadow-sm flex flex-col justify-between min-h-[120px] active:scale-[0.98] transition-transform cursor-pointer border border-[#f0e6e2] hover:border-[#9f3c16]/30"
          >
            <div className="flex items-start justify-between">
              <div className="w-8 h-8 rounded-lg bg-[#bf5424]/15 text-[#bf5424] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">terminal</span>
              </div>
              <span className="text-[11px] font-bold text-[#bf5424] bg-[#bf5424]/10 px-2 py-0.5 rounded-full">
                60%
              </span>
            </div>
            <div className="flex flex-col mt-2">
              <h4 className="text-[16px] text-[#1f1b19] font-bold truncate">Programação</h4>
              <span className="text-[13px] text-[#57423b]">14 conteúdos</span>
              <div className="w-full h-1.5 bg-[#f6ece8] rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-[#bf5424] rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Activities */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#9f3c16] text-[20px]">assignment_turned_in</span>
            <h3 className="text-[16px] text-[#1f1b19] font-bold">Próximas Atividades</h3>
          </div>
          <button
            onClick={() => onNavigate('disciplinas')}
            className="inline-flex items-center gap-0.5 text-[#9f3c16] text-[12px] font-semibold hover:opacity-80 active:translate-x-0.5 transition-all"
          >
            <span>Ver todas</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>

        <div className="flex flex-col gap-2.5">
          {/* Task 1 */}
          <div className="bg-white p-3.5 rounded-xl shadow-sm flex items-center justify-between gap-3 border border-[#f0e6e2]">
            <div className="flex items-start gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-[#4E7A4A]/10 text-[#4E7A4A] flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[20px]">quiz</span>
              </div>
              <div className="flex flex-col min-w-0">
                <h4 className="text-[14px] text-[#1f1b19] font-semibold truncate">Quiz: Genética Mendeliana</h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[13px] text-[#57423b]">Biologia</span>
                  <span className="w-1 h-1 rounded-full bg-[#dec0b7]"></span>
                  <span className="text-[11px] font-semibold text-[#954551]">Hoje, 18:00</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('quiz-ciclo-celular')}
              className="px-3.5 py-1.5 bg-[#9f3c16] text-white rounded-lg text-[12px] font-bold shrink-0 shadow-sm active:scale-95 transition-transform"
            >
              Iniciar Quiz
            </button>
          </div>

          {/* Task 2 */}
          <div className="bg-white p-3.5 rounded-xl shadow-sm flex items-center justify-between gap-3 border border-[#f0e6e2]">
            <div className="flex items-start gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-[#bf5424]/10 text-[#bf5424] flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
              </div>
              <div className="flex flex-col min-w-0">
                <h4 className="text-[14px] text-[#1f1b19] font-semibold truncate">Lista: Funções Quadráticas</h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[13px] text-[#57423b]">Matemática</span>
                  <span className="w-1 h-1 rounded-full bg-[#dec0b7]"></span>
                  <span className="text-[11px] text-[#57423b]">Amanhã</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => openQuickModal('Lista de Funções', 'Esta lista contém 10 exercícios com resolução passo a passo disponível.')}
              className="px-3.5 py-1.5 bg-[#f6ece8] text-[#1f1b19] rounded-lg text-[12px] font-semibold shrink-0 hover:bg-[#ebe0dd] active:scale-95 transition-colors"
            >
              Praticar
            </button>
          </div>
        </div>
      </section>

      {/* Study Groups */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#9f3c16] text-[20px]">groups</span>
            <h3 className="text-[16px] text-[#1f1b19] font-bold">Grupos de Estudo</h3>
          </div>
          <button
            onClick={() => onNavigate('grupos')}
            className="text-[11px] text-[#57423b] hover:text-[#1f1b19] font-medium transition-colors"
          >
            Ver grupos
          </button>
        </div>

        {/* Group Card */}
        <div className="bg-[#fcf1ee] p-4 rounded-2xl shadow-sm flex flex-col gap-3 border border-[#dec0b7]/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#954551]/10 text-[#954551] flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">school</span>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[14px] text-[#1f1b19] font-bold">Foco ENEM &amp; Vestibulares 2025</h4>
                <span className="text-[11px] text-[#57423b]">24 participantes ativos</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-white px-3 py-2.5 rounded-xl shadow-xs">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#9e3d0c] text-[18px]">timer</span>
              <span className="text-[13px] text-[#57423b]">
                Meta coletiva: <strong className="text-[#1f1b19] font-semibold">4h semanais</strong>
              </span>
            </div>
            {/* Avatars */}
            <div className="flex -space-x-1.5 overflow-hidden">
              <div className="h-6 w-6 rounded-full bg-[#ffd9dc] text-[#3f0211] text-[10px] font-bold flex items-center justify-center shadow-xs">M</div>
              <div className="h-6 w-6 rounded-full bg-[#ffdbcf] text-[#390c00] text-[10px] font-bold flex items-center justify-center shadow-xs">P</div>
              <div className="h-6 w-6 rounded-full bg-[#ffdbce] text-[#370e00] text-[10px] font-bold flex items-center justify-center shadow-xs">+22</div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('grupo-detalhes')}
            className="w-full h-10 bg-[#ebe0dd] text-[#954551] text-[13px] font-bold rounded-xl flex items-center justify-center gap-1.5 active:scale-[0.98] transition-transform hover:bg-[#e2d8d4]"
          >
            <span>Ver grupo</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* Interactive Modal Simulation */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-end justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-2xl p-5 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-[#9f3c16] font-bold uppercase tracking-wider">Conecta Estudo</span>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#f6ece8] flex items-center justify-center text-[#57423b] hover:text-[#1f1b19]"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <div>
              <h3 className="text-[18px] text-[#1f1b19] font-bold">{modalTitle}</h3>
              <p className="text-[14px] text-[#57423b] mt-1 leading-relaxed">{modalDescription}</p>
            </div>
            <div className="p-3 bg-[#FAF0EB] rounded-xl flex items-center gap-2">
              <span className="material-symbols-outlined text-[#9f3c16]">psychology</span>
              <span className="text-[13px] text-[#1f1b19]">Conteúdo sincronizado com suas metas de aprovação!</span>
            </div>
            <button
              onClick={() => {
                setModalOpen(false);
                onNavigate('conteudo-ciclo-celular');
              }}
              className="w-full h-12 bg-[#9f3c16] text-white rounded-xl text-[14px] font-semibold flex items-center justify-center gap-2"
            >
              <span>Abrir Sala de Foco</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
