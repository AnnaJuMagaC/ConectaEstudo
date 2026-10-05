import React, { useState } from 'react';
import { APP_IMAGES } from '../data/mockData';
import { ScreenType } from '../types';

interface ConteudoScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onBack: () => void;
}

export const ConteudoScreen: React.FC<ConteudoScreenProps> = ({ onNavigate, onBack }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Ciclo Celular: Mitose e Meiose - Conecta Estudo',
        text: 'Estudando ciclo celular e divisão mitótica no Conecta Estudo!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Link do resumo copiado para a área de transferência!');
    }
  };

  return (
    <div className="flex flex-col w-full pb-10">
      {/* Sub-header de navegação contextual e ações */}
      <div className="px-5 py-2 flex items-center justify-between bg-[#fcf1ee]/80 backdrop-blur-md sticky top-16 z-20 border-b border-[#dec0b7]/30">
        <button
          onClick={onBack}
          type="button"
          aria-label="Voltar para Conteúdos"
          className="flex items-center gap-1 text-[#57423b] hover:text-[#9f3c16] transition-colors py-1"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          <span className="text-[12px] font-semibold">Biologia &gt; Ciclo Celular</span>
        </button>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            aria-label="Salvar marcador"
            type="button"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              isBookmarked ? 'bg-[#ffdbcf] text-[#9f3c16]' : 'bg-[#f6ece8] text-[#57423b] hover:bg-[#ebe0dd]'
            }`}
          >
            <span
              className={`material-symbols-outlined text-[20px] ${isBookmarked ? 'fill text-[#9f3c16]' : ''}`}
            >
              {isBookmarked ? 'bookmark' : 'bookmark_border'}
            </span>
          </button>
          <button
            onClick={handleShare}
            aria-label="Compartilhar anotação"
            type="button"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#f6ece8] hover:bg-[#ebe0dd] text-[#57423b] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">share</span>
          </button>
        </div>
      </div>

      <div className="px-5 pt-3 flex flex-col gap-5">
        {/* Cabeçalho do Conteúdo */}
        <header className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#954551]/10 text-[#954551] text-[11px] font-semibold">
              Biologia Celular • Módulo 3
            </span>
          </div>

          <h1 className="text-[24px] font-bold text-[#1f1b19] tracking-tight leading-tight">
            Ciclo Celular: Mitose e Meiose
          </h1>

          {/* Badges informativos */}
          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f0e6e2] text-[#57423b] text-[11px] font-medium">
              <span className="material-symbols-outlined text-[15px] text-[#9f3c16]">auto_stories</span>
              Leitura Teórica + Prática
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f0e6e2] text-[#57423b] text-[11px] font-medium">
              <span className="material-symbols-outlined text-[15px] text-[#9e3d0c]">schedule</span>
              Tempo estimado: 35 min
            </span>
          </div>

          {/* Barra de Progresso do Conteúdo */}
          <div className="mt-1 p-3.5 rounded-xl bg-white shadow-xs border border-[#f0e6e2] flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-[12px]">
              <span className="text-[#57423b]">Progresso individual</span>
              <span className="text-[#9f3c16] font-bold">
                {isCompleted ? '100% concluído' : '68% concluído'}{' '}
                <span className="font-normal text-[#57423b]/80 text-[11px]">
                  ({isCompleted ? '5 de 5 tópicos' : '3 de 5 tópicos'})
                </span>
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#ebe0dd] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#9f3c16] transition-all duration-500 ease-out"
                style={{ width: isCompleted ? '100%' : '68%' }}
              ></div>
            </div>
          </div>
        </header>

        {/* Imagem de Destaque Editorial com Paleta Quente */}
        <div className="relative w-full h-44 rounded-2xl overflow-hidden shadow-sm bg-[#f0e6e2]">
          <img
            alt="Microscopic aesthetic visualization of eukaryotic cells undergoing mitotic chromosomal division"
            className="w-full h-full object-cover"
            src={APP_IMAGES.cellDivision}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b19]/80 via-[#1f1b19]/25 to-transparent flex items-end p-3.5">
            <span className="text-[12px] text-white tracking-wide flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#ffb59c]"></span>
              Fig 3.1: Cromossomos em condensação e fuso mitótico
            </span>
          </div>
        </div>

        {/* Bloco de Resumo / Objetivos de Aprendizagem */}
        <section className="p-4 rounded-2xl bg-[#fcf1ee] shadow-xs border border-[#dec0b7]/40 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-[#954551]">
            <span className="material-symbols-outlined text-[20px]">lightbulb</span>
            <h2 className="text-[15px] font-bold text-[#1f1b19]">Objetivos de Aprendizagem</h2>
          </div>
          <p className="text-[13px] text-[#57423b] leading-relaxed">
            Compreensão completa das fases estruturais do ciclo (Intérfase: G1, S, G2) e as quatro etapas da divisão celular mitótica (Prófase, Metáfase, Anáfase, Telófase). Identificação detalhada da Meiose e do mecanismo crucial de <strong className="text-[#1f1b19] font-bold">crossing-over</strong> para a geração de diversidade genética nos seres vivos.
          </p>
        </section>

        {/* Conteúdo Principal Estruturado */}
        <article className="flex flex-col gap-5 text-[#1f1b19]">
          {/* Seção 1 */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#9f3c16] text-white text-[11px] flex items-center justify-center font-bold">
                1
              </span>
              <h2 className="text-[17px] font-bold text-[#1f1b19]">O que é o Ciclo Celular e a Intérfase</h2>
            </div>
            <p className="text-[14px] text-[#57423b] leading-relaxed">
              O ciclo celular é a sequência ordenada de eventos pela qual uma célula duplica seu conteúdo e se divide em duas. Ao contrário do senso comum, a maior parte do tempo celular (cerca de 90%) é despendida não na divisão, mas sim na <strong className="text-[#1f1b19]">Intérfase</strong> — fase metabolicamente efervescente.
            </p>

            {/* Cards das subfases da intérfase */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              <div className="p-2.5 rounded-xl bg-white shadow-xs border border-[#f0e6e2] flex flex-col gap-0.5">
                <span className="text-[15px] text-[#9f3c16] font-bold">G1</span>
                <span className="text-[12px] text-[#1f1b19] font-bold">Crescimento</span>
                <span className="text-[11px] text-[#57423b] leading-tight">Síntese proteica intensa e checagem inicial.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white shadow-xs border border-[#f0e6e2] flex flex-col gap-0.5">
                <span className="text-[15px] text-[#9e3d0c] font-bold">S</span>
                <span className="text-[12px] text-[#1f1b19] font-bold">Síntese</span>
                <span className="text-[11px] text-[#57423b] leading-tight">Replicação precisa de todo o DNA nuclear.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white shadow-xs border border-[#f0e6e2] flex flex-col gap-0.5">
                <span className="text-[15px] text-[#954551] font-bold">G2</span>
                <span className="text-[12px] text-[#1f1b19] font-bold">Preparação</span>
                <span className="text-[11px] text-[#57423b] leading-tight">Duplicação de centríolos e checagem final.</span>
              </div>
            </div>
          </section>

          {/* Seção 2 */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#9f3c16] text-white text-[11px] flex items-center justify-center font-bold">
                2
              </span>
              <h2 className="text-[17px] font-bold text-[#1f1b19]">Fases da Mitose: Da Prófase à Citocinese</h2>
            </div>
            <p className="text-[14px] text-[#57423b] leading-relaxed">
              A mitose é o processo equacional em que uma célula-mãe diplóide gera duas células-filhas geneticamente idênticas. Esse mecanismo é responsável pela renovação tecidual, cicatrização e crescimento biológico.
            </p>

            {/* Esquema de Etapas Numeradas */}
            <div className="flex flex-col gap-2 pt-1">
              <div className="p-3 rounded-xl bg-white shadow-xs border border-[#f0e6e2] flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-[#ffdbcf] text-[#390c00] flex items-center justify-center font-bold text-[13px] shrink-0">
                  P
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-[#1f1b19]">Prófase</span>
                  <span className="text-[13px] text-[#57423b] leading-snug">
                    Condensação da cromatina, fragmentação da carioteca e migração dos centrossomos para os polos opostos.
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white shadow-xs border border-[#f0e6e2] flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-[#ffdbce] text-[#370e00] flex items-center justify-center font-bold text-[13px] shrink-0">
                  M
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-[#1f1b19]">Metáfase</span>
                  <span className="text-[13px] text-[#57423b] leading-snug">
                    Cromossomos no grau máximo de espiralação alinhados perfeitamente no plano equatorial (placa metafásica).
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white shadow-xs border border-[#f0e6e2] flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-[#ffd9dc] text-[#3f0211] flex items-center justify-center font-bold text-[13px] shrink-0">
                  A
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-[#1f1b19]">Anáfase</span>
                  <span className="text-[13px] text-[#57423b] leading-snug">
                    Ruptura dos centrômeros e encurtamento dos microtúbulos com migração das cromátides-irmãs para polos distintos.
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white shadow-xs border border-[#f0e6e2] flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-[#f0e6e2] text-[#57423b] flex items-center justify-center font-bold text-[13px] shrink-0">
                  T
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-[#1f1b19]">Telófase &amp; Citocinese</span>
                  <span className="text-[13px] text-[#57423b] leading-snug">
                    Descondensação cromossômica, reorganização dos nucléolos e cariotecas, seguida pela clivagem citoplasmática.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 3 */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#9f3c16] text-white text-[11px] flex items-center justify-center font-bold">
                3
              </span>
              <h2 className="text-[17px] font-bold text-[#1f1b19]">Meiose e Variabilidade Genética</h2>
            </div>
            <p className="text-[14px] text-[#57423b] leading-relaxed">
              Diferente da mitose, a meiose é uma divisão reducional essencial para a formação de gametas. Uma célula diplóide (2n) passa por duas divisões sucessivas gerando quatro células haplóides (n).
            </p>

            <div className="p-3.5 rounded-xl bg-white shadow-xs border border-[#f0e6e2] flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-[#954551] font-bold">
                <span className="material-symbols-outlined text-[18px]">shuffle</span>
                <span className="text-[13px]">Crossing-Over (Permutação)</span>
              </div>
              <p className="text-[13px] text-[#57423b] leading-relaxed">
                Ocorre durante o paquíteno da Prófase I. Os cromossomos homólogos emparelhados trocam segmentos cromatídicos não-irmãos em pontos chamados quiasmas, garantindo infinitas combinações alélicas exclusivas.
              </p>
            </div>
          </section>

          {/* Bloco: Dica do Professor / Ponto de Atenção */}
          <section className="p-4 rounded-2xl bg-[#ffdbcf]/40 shadow-xs border border-[#dec0b7] flex flex-col gap-1.5 relative overflow-hidden">
            <div className="flex items-center gap-1.5 text-[#9f3c16]">
              <span className="material-symbols-outlined text-[20px]">psychology_alt</span>
              <span className="text-[12px] font-bold tracking-wide uppercase">
                Dica do Professor • Atenção para o ENEM/Vestibulares
              </span>
            </div>
            <p className="text-[13px] text-[#1f1b19] leading-relaxed">
              <strong className="font-bold text-[#9f3c16]">Não confunda:</strong> na Anáfase da Mitose separam-se as <span className="underline decoration-[#9f3c16] font-semibold">cromátides-irmãs</span>. Já na Anáfase I da Meiose separam-se os <span className="underline decoration-[#954551] font-semibold">cromossomos homólogos</span>. Este é o erro conceitual mais frequente nas provas de biologia!
            </p>
          </section>
        </article>

        {/* Seção de Atividade Relacionada */}
        <section className="flex flex-col gap-2 pt-1">
          <div className="flex justify-between items-center">
            <h3 className="text-[16px] font-bold text-[#1f1b19]">Prática do Conteúdo</h3>
            <span className="text-[12px] text-[#57423b]">Fixação Imediata</span>
          </div>

          <div className="p-4 rounded-2xl bg-white shadow-sm border border-[#f0e6e2] flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-[#1f1b19]">Quiz de Fixação: Mitose e Meiose</span>
                <span className="text-[13px] text-[#57423b]">Questões comentadas com base em exames anteriores</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#ffdbce] text-[#370e00] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">quiz</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-[#57423b] text-[12px]">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-[#9f3c16]">checklist</span>
                5 questões
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-[#9e3d0c]">timer</span>
                10 min
              </span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded-full bg-[#f6ece8] text-[#1f1b19] font-semibold text-[11px]">
                Intermediário
              </span>
            </div>

            <button
              onClick={() => onNavigate('quiz-ciclo-celular')}
              className="w-full h-11 rounded-xl bg-[#9f3c16] text-white text-[13px] font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-transform"
            >
              <span className="material-symbols-outlined text-[18px]">edit_note</span>
              <span>Começar atividade</span>
            </button>
          </div>
        </section>

        {/* Barra de Ações do Conteúdo */}
        <section className="flex flex-col gap-2 pt-1">
          {/* Botão Secundário: Marcar como concluído */}
          <button
            onClick={() => setIsCompleted(!isCompleted)}
            type="button"
            className={`w-full h-12 rounded-xl text-[13px] font-bold flex items-center justify-center gap-2 transition-all ${
              isCompleted
                ? 'bg-[#ffdbcf]/60 text-[#390c00] border border-[#dec0b7]'
                : 'bg-[#f6ece8] hover:bg-[#ebe0dd] text-[#792e3b]'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                isCompleted ? 'bg-[#9f3c16] text-white' : 'bg-[#ebe0dd] text-transparent'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">check</span>
            </div>
            <span>{isCompleted ? 'Concluído com sucesso' : 'Marcar como concluído'}</span>
          </button>

          {/* Feedback de confirmação */}
          {isCompleted && (
            <div className="p-3 rounded-xl bg-[#fcf1ee] text-[#1f1b19] text-[12px] flex items-center justify-center gap-2 border border-[#dec0b7]/40 animate-in fade-in duration-200">
              <span className="material-symbols-outlined text-[#954551] text-[18px]">celebration</span>
              <span>Parabéns! Você concluiu este conteúdo com sucesso.</span>
            </div>
          )}

          {/* Botão Primário: Continuar lendo / Praticar */}
          <button
            onClick={() => onNavigate('quiz-ciclo-celular')}
            type="button"
            className="w-full h-12 rounded-xl bg-[#9f3c16] text-white text-[14px] font-bold flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-transform hover:bg-[#bf542c]"
          >
            <span>Continuar lendo / Praticar atividade</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </section>
      </div>
    </div>
  );
};
