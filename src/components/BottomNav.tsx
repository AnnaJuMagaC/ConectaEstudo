import React from 'react';
import { ScreenType } from '../types';

interface BottomNavProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const tabs = [
    { id: 'inicio' as ScreenType, label: 'Início', icon: 'home' },
    { id: 'disciplinas' as ScreenType, label: 'Disciplinas', icon: 'menu_book' },
    { id: 'grupos' as ScreenType, label: 'Grupos', icon: 'groups' },
    { id: 'progresso' as ScreenType, label: 'Progresso', icon: 'equalizer' },
    { id: 'perfil' as ScreenType, label: 'Perfil', icon: 'account_circle' },
  ];

  // Map sub-screens to main tabs
  const getActiveTab = (): ScreenType => {
    if (['biologia-trilha', 'conteudo-ciclo-celular', 'quiz-ciclo-celular', 'resultado-quiz'].includes(currentScreen)) {
      return 'disciplinas';
    }
    if (['grupo-detalhes', 'criar-grupo'].includes(currentScreen)) {
      return 'grupos';
    }
    return currentScreen;
  };

  const activeTab = getActiveTab();

  return (
    <nav className="fixed bottom-0 w-full z-40 pb-safe bg-[#fff8f6]/92 backdrop-blur-xl shadow-[0_-4px_16px_rgba(31,27,25,0.05)] border-t border-[#f0e6e2]">
      <div className="flex justify-between items-center h-16 px-2 max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex-1 min-w-[50px] h-full flex flex-col items-center justify-center gap-0.5 transition-colors active:scale-95 ${
                isActive ? 'text-[#9f3c16] font-semibold' : 'text-[#57423b] hover:text-[#1f1b19]'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[24px] ${isActive ? 'fill' : ''}`}
              >
                {tab.icon}
              </span>
              <span className="text-[11px] leading-[14px] tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
