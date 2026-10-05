/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { InicioScreen } from './screens/InicioScreen';
import { DisciplinasScreen } from './screens/DisciplinasScreen';
import { BiologiaTrilhaScreen } from './screens/BiologiaTrilhaScreen';
import { ConteudoScreen } from './screens/ConteudoScreen';
import { QuizScreen } from './screens/QuizScreen';
import { ResultadoScreen } from './screens/ResultadoScreen';
import { GruposScreen } from './screens/GruposScreen';
import { GrupoDetalhesScreen } from './screens/GrupoDetalhesScreen';
import { CriarGrupoScreen } from './screens/CriarGrupoScreen';
import { ProgressoScreen } from './screens/ProgressoScreen';
import { PerfilScreen } from './screens/PerfilScreen';
import { LoginScreen } from './screens/LoginScreen';
import { CadastroScreen } from './screens/CadastroScreen';
import { INITIAL_USER, STUDY_GROUPS } from './data/mockData';
import { ScreenType, StudyGroup, UserProfile } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('inicio');
  const [user, setUser] = useState<UserProfile>(INITIAL_USER);
  const [groups, setGroups] = useState<StudyGroup[]>(STUDY_GROUPS);
  const [showScreenPicker, setShowScreenPicker] = useState(false);

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    switch (currentScreen) {
      case 'biologia-trilha':
        setCurrentScreen('disciplinas');
        break;
      case 'conteudo-ciclo-celular':
        setCurrentScreen('biologia-trilha');
        break;
      case 'quiz-ciclo-celular':
        setCurrentScreen('conteudo-ciclo-celular');
        break;
      case 'resultado-quiz':
        setCurrentScreen('biologia-trilha');
        break;
      case 'grupo-detalhes':
        setCurrentScreen('grupos');
        break;
      case 'criar-grupo':
        setCurrentScreen('grupos');
        break;
      case 'login':
        setCurrentScreen('inicio');
        break;
      case 'cadastro':
        setCurrentScreen('login');
        break;
      default:
        setCurrentScreen('inicio');
        break;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateUser = (updated: Partial<UserProfile>) => {
    setUser((prev) => ({ ...prev, ...updated }));
  };

  const handleAddGroup = (newGroup: StudyGroup) => {
    setGroups((prev) => [newGroup, ...prev]);
    setCurrentScreen('grupos');
  };

  const handleToggleJoinGroup = (groupId: string) => {
    setGroups((prev) =>
      prev.map((g) => {
        if (g.id === groupId) {
          const nextState = !g.isMember;
          return {
            ...g,
            isMember: nextState,
            membersCount: nextState ? g.membersCount + 1 : Math.max(1, g.membersCount - 1),
            tag: nextState ? 'Participando' : 'Descobrir',
          };
        }
        return g;
      })
    );
  };

  const handleLoginSuccess = (email: string) => {
    setUser((prev) => ({
      ...prev,
      email,
    }));
  };

  const handleRegisterSuccess = (name: string, email: string, track: string) => {
    setUser((prev) => ({
      ...prev,
      name,
      email,
      objective: track,
    }));
  };

  // Determine back button presence
  const hasBackButton = [
    'biologia-trilha',
    'conteudo-ciclo-celular',
    'quiz-ciclo-celular',
    'resultado-quiz',
    'grupo-detalhes',
    'criar-grupo',
    'login',
    'cadastro',
  ].includes(currentScreen);

  // Bottom navigation visibility
  const showBottomNav = !['quiz-ciclo-celular', 'resultado-quiz', 'login', 'cadastro'].includes(
    currentScreen
  );

  return (
    <div className="min-h-screen bg-[#fff8f6] text-[#1f1b19] flex flex-col items-center">
      {/* Container simulating high quality mobile touch frame or responsive container */}
      <div className="w-full max-w-md min-h-screen bg-[#fff8f6] relative flex flex-col shadow-sm">
        {/* Sticky Header */}
        <Header
          currentScreen={currentScreen}
          onNavigate={handleNavigate}
          onBack={hasBackButton ? handleBack : undefined}
          user={user}
        />

        {/* Main Content View with top padding for header and bottom padding for nav */}
        <main className={`flex-1 flex flex-col w-full pt-16 ${showBottomNav ? 'pb-20' : 'pb-6'}`}>
          {currentScreen === 'inicio' && (
            <InicioScreen onNavigate={handleNavigate} user={user} />
          )}

          {currentScreen === 'disciplinas' && (
            <DisciplinasScreen onNavigate={handleNavigate} />
          )}

          {currentScreen === 'biologia-trilha' && (
            <BiologiaTrilhaScreen
              onNavigate={handleNavigate}
              onBack={() => handleNavigate('disciplinas')}
            />
          )}

          {currentScreen === 'conteudo-ciclo-celular' && (
            <ConteudoScreen
              onNavigate={handleNavigate}
              onBack={() => handleNavigate('biologia-trilha')}
            />
          )}

          {currentScreen === 'quiz-ciclo-celular' && (
            <QuizScreen
              onNavigate={handleNavigate}
              onBack={() => handleNavigate('conteudo-ciclo-celular')}
            />
          )}

          {currentScreen === 'resultado-quiz' && (
            <ResultadoScreen onNavigate={handleNavigate} user={user} />
          )}

          {currentScreen === 'grupos' && (
            <GruposScreen
              onNavigate={handleNavigate}
              groups={groups}
              onToggleJoin={handleToggleJoinGroup}
            />
          )}

          {currentScreen === 'grupo-detalhes' && (
            <GrupoDetalhesScreen
              onNavigate={handleNavigate}
              onBack={() => handleNavigate('grupos')}
            />
          )}

          {currentScreen === 'criar-grupo' && (
            <CriarGrupoScreen
              onBack={() => handleNavigate('grupos')}
              onCreateGroup={handleAddGroup}
            />
          )}

          {currentScreen === 'progresso' && (
            <ProgressoScreen onNavigate={handleNavigate} user={user} />
          )}

          {currentScreen === 'perfil' && (
            <PerfilScreen
              onNavigate={handleNavigate}
              user={user}
              onUpdateUser={handleUpdateUser}
            />
          )}

          {currentScreen === 'login' && (
            <LoginScreen
              onNavigate={handleNavigate}
              onLoginSuccess={handleLoginSuccess}
            />
          )}

          {currentScreen === 'cadastro' && (
            <CadastroScreen
              onNavigate={handleNavigate}
              onRegisterSuccess={handleRegisterSuccess}
            />
          )}
        </main>

        {/* Fixed Bottom Navigation */}
        {showBottomNav && (
          <BottomNav currentScreen={currentScreen} onNavigate={handleNavigate} />
        )}
      </div>

      {/* Floating Screen Switcher Pill (convenient for reviewers to inspect all 13 screens directly) */}
      <div className="fixed bottom-3 right-3 z-50 flex flex-col items-end">
        {showScreenPicker && (
          <div className="mb-2 p-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-[#dec0b7] flex flex-col gap-1 w-64 max-h-[70vh] overflow-y-auto text-[12px]">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#f0e6e2] font-bold text-[#9f3c16]">
              <span>Navegar para Tela:</span>
              <button
                onClick={() => setShowScreenPicker(false)}
                className="text-[#57423b] hover:text-[#1f1b19]"
              >
                ✕
              </button>
            </div>
            {[
              { id: 'inicio', label: '1. Início (Dashboard)' },
              { id: 'disciplinas', label: '2. Disciplinas (Catálogo)' },
              { id: 'biologia-trilha', label: '3. Trilha: Biologia Celular' },
              { id: 'conteudo-ciclo-celular', label: '4. Conteúdo: Ciclo Celular' },
              { id: 'quiz-ciclo-celular', label: '5. Quiz Interativo' },
              { id: 'resultado-quiz', label: '6. Resultado da Atividade' },
              { id: 'grupos', label: '7. Grupos de Estudo' },
              { id: 'grupo-detalhes', label: '8. Detalhes do Grupo (ENEM)' },
              { id: 'criar-grupo', label: '9. Criar Grupo' },
              { id: 'progresso', label: '10. Meu Progresso' },
              { id: 'perfil', label: '11. Perfil & Configurações' },
              { id: 'login', label: '12. Login' },
              { id: 'cadastro', label: '13. Cadastro' },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  handleNavigate(s.id as ScreenType);
                  setShowScreenPicker(false);
                }}
                className={`text-left px-2.5 py-1.5 rounded-lg transition-colors truncate ${
                  currentScreen === s.id
                    ? 'bg-[#9f3c16] text-white font-bold'
                    : 'text-[#1f1b19] hover:bg-[#fcf1ee]'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}

        <button
          onClick={() => setShowScreenPicker(!showScreenPicker)}
          className="h-10 px-3 bg-[#1f1b19] text-white rounded-full shadow-lg text-[12px] font-bold flex items-center gap-1.5 active:scale-95 transition-all opacity-85 hover:opacity-100"
          title="Alternar entre todas as telas criadas"
        >
          <span className="material-symbols-outlined text-[16px] text-[#ffb59c]">layers</span>
          <span>Telas ({[
            'inicio', 'disciplinas', 'biologia-trilha', 'conteudo-ciclo-celular', 
            'quiz-ciclo-celular', 'resultado-quiz', 'grupos', 'grupo-detalhes', 
            'criar-grupo', 'progresso', 'perfil', 'login', 'cadastro'
          ].length})</span>
        </button>
      </div>
    </div>
  );
}
