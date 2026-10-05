import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../data/mockData';
import { ScreenType } from '../types';

interface QuizScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onBack: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ onNavigate, onBack }) => {
  // Start on Question 3 to match the exact template screenshot!
  const [currentIdx, setCurrentIdx] = useState(2);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({
    0: 'A',
    1: 'D', // deliberately D so Question 2 has error review in results!
    2: 'B', // selected in template
  });
  const [hintExpanded, setHintExpanded] = useState(false);
  const [timeLeft, setTimeLeft] = useState(522); // 08:42
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQ = QUIZ_QUESTIONS[currentIdx] || QUIZ_QUESTIONS[0];
  const selectedLetter = userAnswers[currentIdx];
  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = Math.round(((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100);

  const handleSelect = (letter: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentIdx]: letter,
    }));
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setHintExpanded(false);
    } else {
      onNavigate('resultado-quiz');
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
      setHintExpanded(false);
    }
  };

  return (
    <div className="flex flex-col w-full px-5 pb-8 gap-4 pt-1">
      {/* Top Context & Header Action Row */}
      <div className="flex items-center justify-between pt-1">
        <button
          onClick={onBack}
          type="button"
          aria-label="Voltar à disciplina"
          className="w-10 h-10 rounded-full bg-[#f6ece8] flex items-center justify-center text-[#1f1b19] hover:bg-[#f0e6e2] active:scale-95 shadow-xs transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>

        <div className="flex flex-col items-center">
          <span className="text-[11px] text-[#57423b] uppercase tracking-wider font-semibold">
            Quiz de Biologia
          </span>
          <h2 className="text-[16px] text-[#1f1b19] font-bold">Ciclo Celular</h2>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Live Timer Badge */}
          <div className="flex items-center gap-1 bg-[#fcf1ee] px-2.5 py-1.5 rounded-full shadow-xs border border-[#dec0b7]/40">
            <span className="material-symbols-outlined text-[#9f3c16] text-[16px] animate-pulse">timer</span>
            <span className="text-[12px] text-[#9f3c16] font-bold font-mono">
              {formatTime(timeLeft)}
            </span>
          </div>
          <button
            onClick={() => setShowHelp(true)}
            type="button"
            aria-label="Ajuda e orientações"
            className="w-9 h-9 rounded-full bg-[#fcf1ee] flex items-center justify-center text-[#57423b] hover:text-[#9f3c16]"
          >
            <span className="material-symbols-outlined text-[20px]">help_outline</span>
          </button>
        </div>
      </div>

      {/* Progress Track & Topic Pills */}
      <div className="flex flex-col gap-2 bg-white p-3.5 rounded-2xl shadow-xs border border-[#f0e6e2]">
        <div className="flex items-center justify-between">
          <span className="text-[13px] text-[#1f1b19] font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#9f3c16] inline-block"></span>
            Questão {currentIdx + 1} de {QUIZ_QUESTIONS.length}
          </span>
          <span className="text-[11px] text-[#57423b] font-medium">{progressPercent}% concluído</span>
        </div>

        {/* Linear Progress Bar */}
        <div className="w-full h-2 bg-[#f6ece8] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#9f3c16] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Tags Row */}
        <div className="flex items-center justify-between pt-1 gap-2">
          <div className="inline-flex items-center gap-1.5 bg-[#fcf1ee] px-2.5 py-1 rounded-full border border-[#dec0b7]/30">
            <span className="material-symbols-outlined text-[#9f3c16] text-[14px]">science</span>
            <span className="text-[11px] text-[#57423b] font-medium truncate max-w-[170px]">
              {currentQ.topic}
            </span>
          </div>
          <div className="inline-flex items-center gap-1 bg-[#ffdbce] text-[#7f2b00] px-2.5 py-1 rounded-full text-[11px] font-bold">
            <span className="material-symbols-outlined text-[14px]">bolt</span>
            <span>{currentQ.level} (+{currentQ.xp} XP)</span>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="flex flex-col bg-white p-4 rounded-2xl shadow-xs border border-[#f0e6e2] gap-3">
        {/* Enunciation */}
        <div className="flex items-start gap-2.5">
          <span className="w-6 h-6 rounded-full bg-[#9f3c16]/10 text-[#9f3c16] flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5">
            {currentIdx + 1}
          </span>
          <p className="text-[15px] font-semibold text-[#1f1b19] leading-snug">
            {currentQ.question}
          </p>
        </div>

        {/* Schematic Illustration if present */}
        {currentQ.diagramUrl && (
          <div className="relative w-full h-44 rounded-xl overflow-hidden bg-[#fcf1ee] border border-[#f0e6e2] flex items-center justify-center">
            <img
              alt={currentQ.diagramCaption || 'Diagrama Didático'}
              className="w-full h-full object-cover"
              src={currentQ.diagramUrl}
            />
            <div className="absolute bottom-2 left-2 bg-[#1f1b19]/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[11px] flex items-center gap-1 font-medium">
              <span className="material-symbols-outlined text-[13px]">zoom_in</span>
              <span>{currentQ.diagramCaption}</span>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Alternatives Group */}
      <div className="flex flex-col gap-2.5" role="radiogroup">
        {currentQ.options.map((opt) => {
          const isSelected = selectedLetter === opt.letter;
          return (
            <div
              key={opt.letter}
              onClick={() => handleSelect(opt.letter)}
              role="radio"
              aria-checked={isSelected}
              className={`cursor-pointer group flex items-start p-3.5 rounded-xl transition-all duration-200 shadow-xs active:scale-[0.99] relative overflow-hidden border ${
                isSelected
                  ? 'bg-[#ffdbcf]/25 border-[#9f3c16]'
                  : 'bg-white hover:bg-[#fcf1ee] border-[#f0e6e2]'
              }`}
            >
              {isSelected && <div className="absolute inset-y-0 left-0 w-1.5 bg-[#9f3c16]"></div>}

              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5 transition-colors ${
                  isSelected
                    ? 'bg-[#9f3c16] text-white shadow-xs'
                    : 'bg-[#f6ece8] text-[#57423b] group-hover:bg-[#ffdbcf] group-hover:text-[#9f3c16]'
                }`}
              >
                {isSelected ? (
                  <span className="material-symbols-outlined text-[16px]">check</span>
                ) : (
                  opt.letter
                )}
              </div>

              <div className="ml-3 flex-1">
                <p className={`text-[14px] leading-snug ${isSelected ? 'text-[#1f1b19] font-medium' : 'text-[#1f1b19]'}`}>
                  {opt.text}
                </p>
                {isSelected && (
                  <span className="inline-block mt-1 text-[11px] text-[#9f3c16] font-semibold">
                    Sua resposta selecionada
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Didactic Hint Collapsible Container */}
      <div className="flex flex-col bg-[#fcf1ee] rounded-xl p-3.5 border border-[#dec0b7]/40 transition-all duration-300">
        <button
          onClick={() => setHintExpanded(!hintExpanded)}
          type="button"
          className="flex items-center justify-between w-full text-left"
        >
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#bf5424]/15 text-[#9e3d0c] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[17px]">lightbulb</span>
            </span>
            <div className="flex flex-col">
              <span className="text-[12px] font-semibold text-[#1f1b19]">Dica de estudo disponível</span>
              <span className="text-[11px] text-[#57423b]">Não desconta pontos nem XP</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="bg-[#fe99a6]/30 text-[#792e3b] px-2 py-0.5 rounded-full text-[10px] font-semibold">
              Vestibulares &amp; ENEM
            </span>
            <span
              className={`material-symbols-outlined text-[#57423b] text-[20px] transition-transform duration-200 ${
                hintExpanded ? 'rotate-180' : ''
              }`}
            >
              expand_more
            </span>
          </div>
        </button>

        {hintExpanded && (
          <div className="mt-2.5 pt-2.5 bg-white p-3 rounded-xl text-[#57423b] text-[12px] leading-relaxed border border-[#f0e6e2] animate-in fade-in duration-200">
            <strong className="text-[#9e3d0c] font-semibold">Macete mnemônico: </strong>
            {currentQ.hint}
          </div>
        )}
      </div>

      {/* Primary Navigation Actions */}
      <div className="flex items-center gap-2 pt-1">
        <button
          onClick={handlePrev}
          disabled={currentIdx === 0}
          type="button"
          className={`flex-1 h-12 rounded-xl text-[13px] font-semibold flex items-center justify-center gap-1 transition-transform active:scale-95 shadow-xs ${
            currentIdx === 0
              ? 'bg-[#f6ece8] text-[#8a726a] opacity-50 cursor-not-allowed'
              : 'bg-[#f6ece8] text-[#57423b] hover:bg-[#ebe0dd]'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span>Anterior</span>
        </button>

        <button
          onClick={handleNext}
          type="button"
          className="h-12 px-3 rounded-xl bg-[#f6ece8] text-[#57423b] text-[12px] font-medium hover:text-[#1f1b19] active:scale-95"
        >
          Pular
        </button>

        <button
          onClick={handleNext}
          type="button"
          className="flex-[1.5] h-12 rounded-xl bg-[#9f3c16] text-white text-[13px] font-bold flex items-center justify-center gap-1.5 shadow-md hover:bg-[#bf542c] active:scale-98 transition-all"
        >
          <span>{currentIdx === QUIZ_QUESTIONS.length - 1 ? 'Concluir' : 'Próxima'}</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>

      {/* Status & Finish Activity Action Ribbon */}
      <div className="bg-white p-3 rounded-2xl shadow-xs border border-[#f0e6e2] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#ffd9dc] text-[#3f0211] flex items-center justify-center">
            <span className="material-symbols-outlined text-[16px]">task_alt</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] font-semibold text-[#1f1b19]">Obrigatórias respondidas</span>
            <span className="text-[11px] text-[#57423b]">{answeredCount} de {QUIZ_QUESTIONS.length} questões salvas</span>
          </div>
        </div>

        <button
          onClick={() => onNavigate('resultado-quiz')}
          type="button"
          className="h-9 px-3.5 rounded-full bg-[#954551] text-white text-[12px] font-bold flex items-center gap-1.5 shadow-xs hover:opacity-90 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-[16px]">done_all</span>
          <span>Finalizar</span>
        </button>
      </div>

      {/* Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-white rounded-2xl p-5 shadow-2xl flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-[#9f3c16] font-bold uppercase">Orientações do Quiz</span>
              <button onClick={() => setShowHelp(false)} className="text-[#57423b]">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <p className="text-[13px] text-[#57423b] leading-relaxed">
              • Selecione uma alternativa por questão.<br />
              • O cronômetro é consultivo e ajuda a treinar seu tempo de prova.<br />
              • Dicas não descontam XP nem alteram a pontuação final.<br />
              • Suas respostas são salvas automaticamente a cada clique.
            </p>
            <button
              onClick={() => setShowHelp(false)}
              className="mt-2 w-full h-11 bg-[#9f3c16] text-white rounded-xl text-[13px] font-bold"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
