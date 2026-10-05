import React, { useState } from 'react';
import { APP_IMAGES } from '../data/mockData';
import { ScreenType, UserProfile } from '../types';

interface PerfilScreenProps {
  onNavigate: (screen: ScreenType) => void;
  user: UserProfile;
  onUpdateUser: (updated: Partial<UserProfile>) => void;
}

export const PerfilScreen: React.FC<PerfilScreenProps> = ({
  onNavigate,
  user,
  onUpdateUser,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editName, setEditName] = useState(user.name);
  const [editEmail, setEditEmail] = useState(user.email);
  const [editObjective, setEditObjective] = useState(user.objective);
  const [focusMode, setFocusMode] = useState(user.focusMode);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateUser({
      name: editName.trim(),
      email: editEmail.trim(),
      objective: editObjective.trim(),
      focusMode,
    });
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      setIsEditModalOpen(false);
    }, 600);
  };

  const handleToggleFocus = () => {
    const next = !focusMode;
    setFocusMode(next);
    onUpdateUser({ focusMode: next });
  };

  return (
    <div className="flex flex-col w-full pb-10">
      <div className="px-5 pt-2 pb-6 flex flex-col gap-5">
        {/* Profile Hero Card */}
        <div className="relative w-full bg-white rounded-2xl p-5 shadow-sm border border-[#f0e6e2] flex flex-col items-center text-center overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#ffdbcf]/40 blur-2xl pointer-events-none"></div>
          <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-[#ffdbce]/30 blur-xl pointer-events-none"></div>

          {/* Avatar with Edit Badge */}
          <div className="relative mb-3">
            <div className="w-24 h-24 rounded-full p-1 bg-[#f0e6e2] shadow-sm flex items-center justify-center">
              <img
                className="w-full h-full rounded-full object-cover"
                alt="Foto de perfil de Marina"
                src={APP_IMAGES.profileAvatar}
              />
            </div>
            <button
              onClick={() => setIsEditModalOpen(true)}
              aria-label="Alterar foto de perfil"
              type="button"
              className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#9f3c16] text-white flex items-center justify-center shadow-md active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[16px]">photo_camera</span>
            </button>
          </div>

          {/* Name & Bio */}
          <h1 className="text-[20px] font-bold text-[#1f1b19] tracking-tight">{user.name}</h1>
          <p className="text-[13px] text-[#57423b] mt-0.5">{user.email}</p>

          {/* Track / Specialty Badge */}
          <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f6ece8] text-[#1f1b19] text-[12px] font-semibold border border-[#dec0b7]/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9f3c16]"></span>
            <span>{user.objective}</span>
          </div>

          {/* Quick Stats Ribbon */}
          <div className="grid grid-cols-3 w-full mt-4 p-2 rounded-xl bg-[#fcf1ee] gap-2 text-center border border-[#dec0b7]/30">
            {/* Streak */}
            <div className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-white shadow-xs">
              <div className="flex items-center gap-1 text-[#9f3c16]">
                <span className="material-symbols-outlined text-[18px] fill">local_fire_department</span>
                <span className="text-[18px] font-bold font-mono">{user.streakDays}</span>
              </div>
              <span className="text-[11px] text-[#57423b] mt-0.5">Dias seguidos</span>
            </div>

            {/* Modules */}
            <div className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-white shadow-xs">
              <div className="flex items-center gap-1 text-[#954551]">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="text-[18px] font-bold font-mono">{user.completedModules}</span>
              </div>
              <span className="text-[11px] text-[#57423b] mt-0.5">Módulos</span>
            </div>

            {/* Accuracy */}
            <div className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-white shadow-xs">
              <div className="flex items-center gap-1 text-[#bf542c]">
                <span className="material-symbols-outlined text-[18px]">percent</span>
                <span className="text-[18px] font-bold font-mono">{user.accuracyRate}</span>
              </div>
              <span className="text-[11px] text-[#57423b] mt-0.5">Precisão geral</span>
            </div>
          </div>

          {/* Edit Profile Action Button */}
          <button
            onClick={() => setIsEditModalOpen(true)}
            type="button"
            className="w-full mt-3.5 h-11 rounded-xl bg-[#f6ece8] hover:bg-[#f0e6e2] text-[#1f1b19] text-[13px] font-bold flex items-center justify-center gap-2 active:scale-[0.99] transition-all shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px] text-[#9f3c16]">edit</span>
            <span>Editar perfil</span>
          </button>
        </div>

        {/* Section 1: Meus Estudos */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-[15px] font-bold text-[#1f1b19] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#9f3c16] text-[20px]">school</span>
              <span>Meus Estudos</span>
            </h2>
            <span className="text-[11px] text-[#57423b] font-medium">Painel de aprendizado</span>
          </div>

          <div className="bg-white rounded-2xl shadow-xs border border-[#f0e6e2] flex flex-col overflow-hidden">
            {/* Shortcut: Meu Progresso */}
            <div
              onClick={() => onNavigate('progresso')}
              className="flex items-center justify-between p-3.5 hover:bg-[#fcf1ee] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#ffdbcf] flex items-center justify-center shrink-0 text-[#822801]">
                  <span className="material-symbols-outlined text-[20px]">trending_up</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[14px] font-bold text-[#1f1b19] truncate">Meu progresso</span>
                  <span className="text-[12px] text-[#57423b] truncate">Desempenho semanal, horas e metas de foco</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#57423b] text-[20px]">chevron_right</span>
            </div>

            <div className="h-px bg-[#f6ece8] mx-3.5"></div>

            {/* Shortcut: Minhas Disciplinas */}
            <div
              onClick={() => onNavigate('disciplinas')}
              className="flex items-center justify-between p-3.5 hover:bg-[#fcf1ee] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#f0e6e2] flex items-center justify-center shrink-0 text-[#954551]">
                  <span className="material-symbols-outlined text-[20px]">menu_book</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[14px] font-bold text-[#1f1b19] truncate">Minhas disciplinas</span>
                  <span className="text-[12px] text-[#57423b] truncate">4 ativas: Biologia, Matemática, História e Redação</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#57423b] text-[20px]">chevron_right</span>
            </div>

            <div className="h-px bg-[#f6ece8] mx-3.5"></div>

            {/* Shortcut: Minhas Atividades */}
            <div
              onClick={() => onNavigate('quiz-ciclo-celular')}
              className="flex items-center justify-between p-3.5 hover:bg-[#fcf1ee] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#ffdbce] flex items-center justify-center shrink-0 text-[#9e3d0c]">
                  <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] font-bold text-[#1f1b19] truncate">Minhas atividades</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#ffd9dc] text-[#3f0211] text-[10px] font-bold">
                      2 pendentes
                    </span>
                  </div>
                  <span className="text-[12px] text-[#57423b] truncate">Simulados, listas e revisões agendadas</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#57423b] text-[20px]">chevron_right</span>
            </div>
          </div>
        </div>

        {/* Section 2: Grupos e Colaboração */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-[15px] font-bold text-[#1f1b19] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#954551] text-[20px]">groups</span>
              <span>Grupos e Colaboração</span>
            </h2>
            <span className="inline-flex items-center gap-1 text-[11px] text-[#9f3c16] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#9f3c16] animate-pulse"></span>
              <span>Salas ao vivo</span>
            </span>
          </div>

          <div className="bg-white rounded-2xl shadow-xs border border-[#f0e6e2] flex flex-col overflow-hidden">
            <div
              onClick={() => onNavigate('grupos')}
              className="flex items-center justify-between p-3.5 hover:bg-[#fcf1ee] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#f0e6e2] flex items-center justify-center shrink-0 text-[#57423b]">
                  <span className="material-symbols-outlined text-[20px]">forum</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[14px] font-bold text-[#1f1b19] truncate">Meus grupos de estudo</span>
                  <span className="text-[12px] text-[#57423b] truncate">2 ativos: Maratona ENEM 2025, BioFoco</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#57423b] text-[20px]">chevron_right</span>
            </div>

            {/* Collaborative Actions */}
            <div className="p-3 bg-[#fcf1ee] flex items-center gap-2 border-t border-[#f6ece8]">
              <button
                onClick={() => onNavigate('criar-grupo')}
                className="flex-1 h-10 rounded-xl bg-[#9f3c16] hover:bg-[#bf542c] text-white text-[13px] font-bold flex items-center justify-center gap-1.5 shadow-xs active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">add_circle</span>
                <span>Criar grupo</span>
              </button>
              <button
                onClick={() => onNavigate('grupos')}
                className="flex-1 h-10 rounded-xl bg-white hover:bg-[#f6ece8] text-[#1f1b19] text-[13px] font-bold flex items-center justify-center gap-1.5 shadow-xs border border-[#f0e6e2] active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px] text-[#954551]">explore</span>
                <span>Descobrir</span>
              </button>
            </div>
          </div>
        </div>

        {/* Section 3: Preferências & Sistema */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-[15px] font-bold text-[#1f1b19] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#9e3d0c] text-[20px]">tune</span>
              <span>Preferências &amp; Sistema</span>
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xs border border-[#f0e6e2] flex flex-col overflow-hidden">
            <div
              onClick={() => alert('Configurações de som e notificações')}
              className="flex items-center justify-between p-3.5 hover:bg-[#fcf1ee] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#f6ece8] flex items-center justify-center shrink-0 text-[#57423b]">
                  <span className="material-symbols-outlined text-[20px]">settings</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[14px] font-bold text-[#1f1b19] truncate">Configurações gerais</span>
                  <span className="text-[12px] text-[#57423b] truncate">Aparência, sons do cronômetro e notificações</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#57423b] text-[20px]">chevron_right</span>
            </div>

            <div className="h-px bg-[#f6ece8] mx-3.5"></div>

            {/* Modo Foco Toggle */}
            <div className="flex items-center justify-between p-3.5">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#f6ece8] flex items-center justify-center shrink-0 text-[#9f3c16]">
                  <span className="material-symbols-outlined text-[20px]">do_not_disturb_on</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[14px] font-bold text-[#1f1b19] truncate">Modo Foco Contínuo</span>
                  <span className="text-[12px] text-[#57423b] truncate">Silencia alertas durante ciclos Pomodoro</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleToggleFocus}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  focusMode ? 'bg-[#9f3c16]' : 'bg-[#ebe0dd]'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                    focusMode ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Section 4: Sessão e Rodapé */}
        <div className="flex flex-col items-center gap-3 pt-1">
          <button
            onClick={() => {
              if (confirm('Deseja realmente encerrar a sessão?')) {
                onNavigate('login');
              }
            }}
            type="button"
            className="w-full h-12 rounded-xl bg-[#fcf1ee] hover:bg-[#f6ece8] text-[#954551] text-[13px] font-bold flex items-center justify-center gap-2 active:scale-[0.99] transition-all border border-[#dec0b7]/40"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span>Encerrar sessão</span>
          </button>

          <div className="flex flex-col items-center text-center gap-0.5 text-[#57423b]">
            <div className="flex items-center gap-1 text-[11px] font-medium">
              <span className="material-symbols-outlined text-[14px] text-[#9f3c16]">spa</span>
              <span>Conecta Estudo • v2.4</span>
            </div>
            <p className="text-[11px] opacity-75">
              Ambiente focado em aprendizagem ativa e colaborativa
            </p>
          </div>
        </div>
      </div>

      {/* Edit Profile Bottom Sheet Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/40 backdrop-blur-xs">
          <div className="w-full bg-white rounded-t-3xl max-h-[90vh] flex flex-col shadow-2xl p-5 gap-4 animate-in slide-in-from-bottom duration-200">
            <div className="w-12 h-1.5 rounded-full bg-[#ebe0dd] mx-auto -mt-1 mb-1"></div>

            <div className="flex items-center justify-between pb-1 border-b border-[#f6ece8]">
              <div>
                <h3 className="text-[18px] font-bold text-[#1f1b19]">Editar Informações</h3>
                <p className="text-[12px] text-[#57423b]">Atualize seus dados acadêmicos e pessoais</p>
              </div>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#f6ece8] flex items-center justify-center text-[#57423b]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="flex flex-col gap-3.5">
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold text-[#1f1b19]">Nome Completo</label>
                <input
                  type="text"
                  required
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-[#fcf1ee] text-[#1f1b19] text-[14px] border border-[#dec0b7]/40 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#9f3c16]/20"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold text-[#1f1b19]">E-mail de Contato</label>
                <input
                  type="email"
                  required
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-[#fcf1ee] text-[#1f1b19] text-[14px] border border-[#dec0b7]/40 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#9f3c16]/20"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold text-[#1f1b19]">Objetivo Principal</label>
                <input
                  type="text"
                  required
                  value={editObjective}
                  onChange={(e) => setEditObjective(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-[#fcf1ee] text-[#1f1b19] text-[14px] border border-[#dec0b7]/40 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#9f3c16]/20"
                />
              </div>

              {saveSuccess && (
                <div className="p-2.5 rounded-lg bg-[#f0e6e2] text-[#9f3c16] text-[12px] font-bold flex items-center gap-1.5 justify-center">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>Alterações salvas com sucesso!</span>
                </div>
              )}

              <div className="flex gap-2.5 pt-2 pb-safe">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="flex-1 h-12 rounded-xl bg-[#f6ece8] text-[#1f1b19] text-[13px] font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 h-12 rounded-xl bg-[#9f3c16] text-white text-[13px] font-bold shadow-md hover:bg-[#bf542c]"
                >
                  Salvar dados
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
