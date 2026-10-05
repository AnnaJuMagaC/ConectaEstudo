import React from 'react';
import { ScreenType, UserProfile } from '../types';

interface HeaderProps {
  currentScreen: ScreenType;
  title?: string;
  onNavigate: (screen: ScreenType) => void;
  onBack?: () => void;
  user: UserProfile;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  title,
  onNavigate,
  onBack,
  user,
}) => {
  const getScreenTitle = () => {
    if (title) return title;
    switch (currentScreen) {
      case 'inicio':
        return 'Início';
      case 'disciplinas':
        return 'Disciplinas';
      case 'biologia-trilha':
        return 'Biologia';
      case 'conteudo-ciclo-celular':
        return 'Disciplinas';
      case 'quiz-ciclo-celular':
        return 'Disciplinas';
      case 'resultado-quiz':
        return 'Disciplinas';
      case 'grupos':
        return 'Grupos';
      case 'grupo-detalhes':
        return 'Detalhes Do Grupo';
      case 'criar-grupo':
        return 'Criar Grupo';
      case 'progresso':
        return 'Progresso';
      case 'perfil':
        return 'Perfil';
      case 'login':
        return 'Conecta Estudo';
      case 'cadastro':
        return 'Cadastro';
      default:
        return 'Conecta Estudo';
    }
  };

  const isAuthScreen = currentScreen === 'login' || currentScreen === 'cadastro';

  return (
    <header className="fixed top-0 w-full z-40 bg-[#fff8f6]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] pt-safe">
      <div className="h-16 px-5 flex items-center justify-between max-w-md mx-auto">
        <div className="flex items-center gap-2.5">
          {onBack ? (
            <button
              onClick={onBack}
              aria-label="Voltar"
              className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-[#1f1b19] hover:bg-[#f6ece8] active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
          ) : (
            <div className="w-9 h-9 rounded-xl bg-[#9f3c16]/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#9f3c16] text-[22px]">auto_stories</span>
            </div>
          )}
          <h1 className="text-[18px] font-semibold text-[#1f1b19] tracking-tight truncate max-w-[200px]">
            {getScreenTitle()}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          {!isAuthScreen && (
            <button
              aria-label="Notificações"
              onClick={() => alert('Você está em dia com todas as notificações e metas semanais!')}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#57423b] hover:bg-[#f6ece8] transition-colors relative"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#9f3c16]"></span>
            </button>
          )}

          <button
            onClick={() => onNavigate(isAuthScreen ? 'inicio' : 'perfil')}
            aria-label="Perfil do usuário"
            className="w-8 h-8 rounded-full overflow-hidden bg-[#9f3c16] flex items-center justify-center text-white active:scale-95 transition-transform ring-2 ring-[#fff8f6] shadow-sm"
          >
            {user.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="material-symbols-outlined text-[18px]">person</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
