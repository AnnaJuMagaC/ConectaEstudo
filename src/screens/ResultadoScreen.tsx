import React from 'react';
import { ScreenType, UserProfile } from '../types';

interface ResultadoScreenProps {
  onNavigate: (screen: ScreenType) => void;
  user: UserProfile;
}

export const ResultadoScreen: React.FC<ResultadoScreenProps> = ({ onNavigate, user }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Quiz de Biologia Concluído!',
        text: 'Acertei 80% no Quiz de Ciclo Celular no Conecta Estudo!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      alert('Resultado copiado com sucesso para a área de transferência!');
    }
  };

  return (
    <div className="flex flex-col w-full pb-10">
      {/* Sub-Header contextual de encerramento da atividade */}
      <div className="flex items-center justify-between px-5 py-2.5 bg-[#fcf1ee] shadow-xs border-b border-[#dec0b7]/40">
        <button
          onClick={() => onNavigate('biologia-trilha')}
          aria-label="Voltar para a disciplina"
          className="w-10 h-10 rounded-full flex items-center justify-center text-[#1f1b19] hover:bg-[#f6ece8] transition-colors active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
        <div className="flex flex-col items-center">
          <span className="text-[11px] uppercase tracking-wider text-[#9f3c16] font-bold">
            Quiz Concluído
          </span>
          <h2 className="text-[15px] font-bold text-[#1f1b19]">Resultado da Atividade</h2>
        </div>
        <button
          onClick={handleShare}
          aria-label="Compartilhar resumo"
          className="w-10 h-10 rounded-full flex items-center justify-center text-[#1f1b19] hover:bg-[#f6ece8] transition-colors active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">share</span>
        </button>
      </div>

      <div className="px-5 flex flex-col gap-5 mt-3">
        {/* Bloco de Celebração e Conquista Humanizada */}
        <div className="relative overflow-hidden rounded-2xl bg-[#f6ece8] p-5 shadow-xs flex flex-col items-center text-center border border-[#dec0b7]/50">
          <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#ffb59c]/30 blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-[#ffd9dc]/40 blur-xl pointer-events-none"></div>

          {/* Badge de Troféu Curado em Terracota e Cerâmica */}
          <div className="relative w-20 h-20 rounded-full bg-[#9f3c16]/10 flex items-center justify-center mb-2 shadow-inner">
            <span className="material-symbols-outlined text-[#9f3c16] text-[44px] fill">
              workspace_premium
            </span>
            <div className="absolute -bottom-1 -right-1 bg-[#954551] text-white w-7 h-7 rounded-full flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[16px] fill">grade</span>
            </div>
          </div>

          <h3 className="text-[22px] font-bold text-[#1f1b19] tracking-tight">
            Excelente desempenho, {user.name.split(' ')[0]}!
          </h3>
          <p className="text-[13px] text-[#57423b] mt-1 max-w-xs leading-relaxed">
            Você demonstrou grande domínio sobre as fases da divisão celular mitótica e meiótica.
          </p>

          {/* Cartão Principal de Aproveitamento */}
          <div className="w-full mt-4 p-3.5 rounded-xl bg-white shadow-xs border border-[#f0e6e2] flex flex-col items-center">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[28px] text-[#9f3c16] tracking-tight font-bold">80%</span>
              <span className="text-[14px] text-[#57423b] font-medium">(4 de 5 acertos)</span>
            </div>

            {/* Pílula de Conquista & XP */}
            <div className="mt-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffdbcf] text-[#390c00]">
              <span className="material-symbols-outlined text-[16px] fill">verified</span>
              <span className="text-[12px] font-bold">Aprovado com maestria • +45 XP</span>
            </div>

            {/* Barra de Progresso Suave Terracota */}
            <div className="w-full mt-3">
              <div className="w-full h-3 rounded-full bg-[#f6ece8] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#954551] via-[#9f3c16] to-[#9e3d0c] transition-all duration-700 ease-out"
                  style={{ width: '80%' }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-1 text-[11px]">
                <span className="text-[#57423b]">Ciclo Celular: Mitose e Meiose</span>
                <span className="text-[#9f3c16] font-bold">Meta Atingida</span>
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas Rápidas e Métricas (Grid 2x2 Tátil) */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* Métrica 1: Acertos */}
          <div className="p-3.5 rounded-2xl bg-white shadow-xs border border-[#f0e6e2] flex flex-col justify-between h-28">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-[#57423b]">Acertos</span>
              <div className="w-7 h-7 rounded-full bg-[#f6ece8] flex items-center justify-center text-[#9f3c16]">
                <span className="material-symbols-outlined text-[18px] fill">check_circle</span>
              </div>
            </div>
            <div>
              <span className="text-[18px] text-[#1f1b19] font-bold">4 questões</span>
              <p className="text-[11px] text-[#9f3c16] font-semibold">80% de precisão</p>
            </div>
          </div>

          {/* Métrica 2: Ponto de Atenção */}
          <div className="p-3.5 rounded-2xl bg-white shadow-xs border border-[#f0e6e2] flex flex-col justify-between h-28">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-[#57423b]">Para Revisar</span>
              <div className="w-7 h-7 rounded-full bg-[#ffd9dc] flex items-center justify-center text-[#954551]">
                <span className="material-symbols-outlined text-[18px] fill">info</span>
              </div>
            </div>
            <div>
              <span className="text-[18px] text-[#954551] font-bold">1 questão</span>
              <p className="text-[11px] text-[#57423b] truncate">Q2: Anáfase</p>
            </div>
          </div>

          {/* Métrica 3: Tempo */}
          <div className="p-3.5 rounded-2xl bg-white shadow-xs border border-[#f0e6e2] flex flex-col justify-between h-28">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-[#57423b]">Tempo Total</span>
              <div className="w-7 h-7 rounded-full bg-[#f6ece8] flex items-center justify-center text-[#9e3d0c]">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
              </div>
            </div>
            <div>
              <span className="text-[18px] text-[#1f1b19] font-bold">04m 12s</span>
              <p className="text-[11px] text-[#57423b]">Ritmo consistente</p>
            </div>
          </div>

          {/* Métrica 4: Ofensiva */}
          <div className="p-3.5 rounded-2xl bg-[#954551] text-white shadow-xs flex flex-col justify-between h-28 relative overflow-hidden">
            <div className="flex items-center justify-between relative z-10">
              <span className="text-[11px] text-[#ffd9dc]">Ofensiva</span>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-[#ffd9dc]">
                <span className="material-symbols-outlined text-[18px] fill">local_fire_department</span>
              </div>
            </div>
            <div className="relative z-10">
              <span className="text-[18px] font-bold">8 Dias</span>
              <p className="text-[11px] text-[#ffd9dc]">Ritmo mantido!</p>
            </div>
          </div>
        </div>

        {/* Seção de Revisão Pedagógica das Questões */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <h4 className="text-[16px] font-bold text-[#1f1b19]">Revisão das Questões</h4>
            <span className="text-[12px] text-[#57423b]">5 itens</span>
          </div>

          <div className="flex flex-col gap-2">
            {/* Item 1 - Correto */}
            <div className="p-3 rounded-xl bg-white shadow-xs border border-[#f0e6e2] flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-full bg-[#9f3c16]/10 flex items-center justify-center shrink-0 text-[#9f3c16]">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[14px] font-bold text-[#1f1b19] truncate">Questão 1</span>
                  <span className="text-[12px] text-[#57423b] truncate">Prófase e condensação cromossômica</span>
                </div>
              </div>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#9f3c16]/10 text-[#9f3c16] font-bold shrink-0 ml-2">
                Correta
              </span>
            </div>

            {/* Item 2 - Atenção e Explicação */}
            <div className="p-3.5 rounded-xl bg-[#fcf1ee] shadow-xs border border-[#ffd9dc] flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-[#ffd9dc] flex items-center justify-center shrink-0 text-[#954551]">
                    <span className="material-symbols-outlined text-[18px]">priority_high</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[14px] font-bold text-[#1f1b19] truncate">Questão 2</span>
                    <span className="text-[12px] text-[#57423b] truncate">Anáfase Mitótica vs Anáfase I Meiótica</span>
                  </div>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#ffd9dc] text-[#3f0211] font-bold shrink-0 ml-2">
                  Atenção
                </span>
              </div>

              <div className="p-3 rounded-lg bg-white text-[#57423b] text-[12px] border border-[#dec0b7]/40 leading-relaxed">
                <p><strong className="text-[#954551] font-semibold">Sua resposta:</strong> Separação de homólogos na mitose.</p>
                <p className="mt-0.5"><strong className="text-[#9f3c16] font-semibold">Gabarito:</strong> Na mitose separam-se cromátides-irmãs.</p>
              </div>

              <button
                onClick={() => alert('Exibindo vídeo conceitual com animação 3D da Anáfase.')}
                className="w-full py-2 px-3 rounded-lg bg-[#f0e6e2] text-[#954551] text-[12px] font-bold flex items-center justify-center gap-1.5 hover:bg-[#ebe0dd] active:scale-98 transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">menu_book</span>
                <span>Ver explicação comentada em vídeo (1 min)</span>
              </button>
            </div>

            {/* Item 3 - Correto */}
            <div className="p-3 rounded-xl bg-white shadow-xs border border-[#f0e6e2] flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-full bg-[#9f3c16]/10 flex items-center justify-center shrink-0 text-[#9f3c16]">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[14px] font-bold text-[#1f1b19] truncate">Questão 3</span>
                  <span className="text-[12px] text-[#57423b] truncate">Metáfase e Placa Equatorial</span>
                </div>
              </div>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#9f3c16]/10 text-[#9f3c16] font-bold shrink-0 ml-2">
                Correta
              </span>
            </div>

            {/* Item 4 - Correto */}
            <div className="p-3 rounded-xl bg-white shadow-xs border border-[#f0e6e2] flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-full bg-[#9f3c16]/10 flex items-center justify-center shrink-0 text-[#9f3c16]">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[14px] font-bold text-[#1f1b19] truncate">Questão 4</span>
                  <span className="text-[12px] text-[#57423b] truncate">Crossing-over durante o Paquíteno</span>
                </div>
              </div>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#9f3c16]/10 text-[#9f3c16] font-bold shrink-0 ml-2">
                Correta
              </span>
            </div>

            {/* Item 5 - Correto */}
            <div className="p-3 rounded-xl bg-white shadow-xs border border-[#f0e6e2] flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-full bg-[#9f3c16]/10 flex items-center justify-center shrink-0 text-[#9f3c16]">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[14px] font-bold text-[#1f1b19] truncate">Questão 5</span>
                  <span className="text-[12px] text-[#57423b] truncate">Citocinese centrípeta vs centrífuga</span>
                </div>
              </div>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#9f3c16]/10 text-[#9f3c16] font-bold shrink-0 ml-2">
                Correta
              </span>
            </div>
          </div>
        </div>

        {/* Bloco Pedagógico: Próximo Passo */}
        <div className="p-4 rounded-2xl bg-[#f0e6e2] shadow-xs border border-[#dec0b7]/50 flex flex-col gap-1.5 relative overflow-hidden">
          <div className="flex items-center gap-1.5 text-[#9f3c16]">
            <span className="material-symbols-outlined text-[20px] fill">insights</span>
            <span className="text-[11px] font-bold uppercase tracking-wider">
              Próximo Passo Sugerido
            </span>
          </div>
          <p className="text-[14px] font-semibold text-[#1f1b19] leading-snug">
            Avançar para <span className="text-[#9f3c16] font-bold">Gametogênese Humana</span> ou reforçar o conceito de Anáfase.
          </p>
          <div className="flex items-center gap-1.5 mt-1 text-[#57423b]">
            <span className="material-symbols-outlined text-[16px] text-[#9e3d0c]">trending_up</span>
            <span className="text-[12px]">
              Seu progresso do módulo de Biologia Celular subiu para <strong>86%</strong>!
            </span>
          </div>
        </div>

        {/* Botões de Ação Principais */}
        <div className="flex flex-col gap-2.5">
          <button
            onClick={() => onNavigate('biologia-trilha')}
            className="w-full h-12 rounded-xl bg-[#9f3c16] text-white text-[14px] font-bold flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-transform hover:bg-[#bf542c]"
          >
            <span>Continuar estudando</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>

          <button
            onClick={() => onNavigate('quiz-ciclo-celular')}
            className="w-full h-12 rounded-xl bg-white text-[#9f3c16] text-[13px] font-bold flex items-center justify-center gap-2 shadow-xs border border-[#f0e6e2] hover:bg-[#f6ece8] active:scale-[0.98] transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">replay</span>
            <span>Tentar novamente para 100%</span>
          </button>

          <div className="flex justify-center pt-1">
            <button
              onClick={() => onNavigate('progresso')}
              className="text-[12px] font-semibold text-[#57423b] hover:text-[#9f3c16] transition-colors py-1 flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">bar_chart</span>
              <span>Ver análise detalhada de desempenho</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
