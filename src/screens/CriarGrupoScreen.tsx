import React, { useState } from 'react';
import { ScreenType, StudyGroup } from '../types';

interface CriarGrupoScreenProps {
  onBack: () => void;
  onCreateGroup: (newGroup: StudyGroup) => void;
}

export const CriarGrupoScreen: React.FC<CriarGrupoScreenProps> = ({ onBack, onCreateGroup }) => {
  const [name, setName] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState('Programação');
  const [objective, setObjective] = useState('');
  const [description, setDescription] = useState('');
  const [intensity, setIntensity] = useState<'moderate' | 'intensive'>('intensive');
  const [membersLimit, setMembersLimit] = useState(15);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newGroup: StudyGroup = {
      id: `group-${Date.now()}`,
      name: name.trim(),
      disciplines: [selectedDiscipline],
      membersCount: 1,
      activeNow: 1,
      isMember: true,
      weeklyGoal: objective.trim() || 'Cumprir metas semanais com auxílio mútuo.',
      description: description.trim() || 'Grupo focado em estudos de alto rendimento.',
      tag: 'Participando',
      icon: 'school',
      intensity,
    };

    onCreateGroup(newGroup);
  };

  return (
    <div className="flex flex-col w-full pb-10">
      <div className="px-5 pt-2 pb-2 flex items-center justify-between">
        <button
          onClick={onBack}
          aria-label="Voltar para Grupos"
          className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-[#1f1b19] hover:bg-[#f6ece8] active:scale-95 transition-transform"
          type="button"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <span className="text-[16px] font-bold text-[#1f1b19]">Novo Grupo de Estudo</span>
        <div className="w-10"></div>
      </div>

      <div className="px-5 flex flex-col gap-4 mt-1">
        {/* Guiding Banner */}
        <div className="p-4 rounded-2xl bg-[#fcf1ee] shadow-xs border border-[#dec0b7]/40 flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#9f3c16]/10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[#9f3c16] text-[22px] fill">handshake</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[13px] font-bold text-[#1f1b19]">Espaço cooperativo &amp; focado</span>
            <p className="text-[12px] text-[#57423b] mt-0.5 leading-snug">
              Espaço de estudo cooperativo com metas claras e sem distrações de redes sociais. Criado para aproximar mentes comprometidas.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Nome do Grupo */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="text-[13px] font-bold text-[#1f1b19] flex items-center gap-1.5" htmlFor="group-name">
                <span className="material-symbols-outlined text-[#9f3c16] text-[18px]">group</span>
                <span>Nome do Grupo</span>
                <span className="text-[#9f3c16]">*</span>
              </label>
              <span className="text-[11px] text-[#57423b]">{name.length}/50</span>
            </div>
            <input
              id="group-name"
              type="text"
              maxLength={50}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Foco Fuvest &amp; Unicamp - Exatas"
              className="w-full h-12 px-4 rounded-xl bg-white text-[#1f1b19] placeholder:text-[#8a726a]/60 text-[14px] shadow-xs border border-[#f0e6e2] focus:outline-none focus:ring-2 focus:ring-[#9f3c16]/20 transition-all"
            />
            <p className="text-[11px] text-[#57423b] px-1">Escolha um nome autêntico e inspirador para o seu time.</p>
          </div>

          {/* Disciplina Principal */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#1f1b19] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#9f3c16] text-[18px]">school</span>
              <span>Disciplina / Tema Principal</span>
              <span className="text-[#9f3c16]">*</span>
            </label>
            <div className="flex flex-wrap gap-2 pt-0.5">
              {[
                { name: 'Biologia', icon: 'biotech' },
                { name: 'Matemática', icon: 'calculate' },
                { name: 'História', icon: 'history_edu' },
                { name: 'Programação', icon: 'code' },
                { name: 'Redação', icon: 'edit_note' },
                { name: 'Química', icon: 'science' },
              ].map((topic) => (
                <button
                  key={topic.name}
                  type="button"
                  onClick={() => setSelectedDiscipline(topic.name)}
                  className={`h-8 px-3.5 rounded-full text-[12px] font-semibold flex items-center gap-1.5 transition-all active:scale-95 ${
                    selectedDiscipline === topic.name
                      ? 'bg-[#9f3c16] text-white shadow-xs'
                      : 'bg-[#f6ece8] text-[#57423b] hover:bg-[#ebe0dd]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">{topic.icon}</span>
                  <span>{topic.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Objetivo do Grupo */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#1f1b19] flex items-center gap-1.5" htmlFor="group-objective">
              <span className="material-symbols-outlined text-[#9f3c16] text-[18px]">flag</span>
              <span>Objetivo do Grupo</span>
              <span className="text-[#9f3c16]">*</span>
            </label>
            <input
              id="group-objective"
              type="text"
              required
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              placeholder="Ex: Resolver 15 questões diárias e debater todo sábado"
              className="w-full h-12 px-4 rounded-xl bg-white text-[#1f1b19] placeholder:text-[#8a726a]/60 text-[14px] shadow-xs border border-[#f0e6e2] focus:outline-none focus:ring-2 focus:ring-[#9f3c16]/20 transition-all"
            />
            <p className="text-[11px] text-[#57423b] px-1">Metas tangíveis aumentam em 70% o engajamento da turma.</p>
          </div>

          {/* Descrição & Rotina */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="text-[13px] font-bold text-[#1f1b19] flex items-center gap-1.5" htmlFor="group-desc">
                <span className="material-symbols-outlined text-[#9f3c16] text-[18px]">notes</span>
                <span>Descrição &amp; Rotina</span>
                <span className="text-[#9f3c16]">*</span>
              </label>
              <span className="text-[11px] text-[#57423b]">{description.length}/300</span>
            </div>
            <textarea
              id="group-desc"
              rows={3}
              maxLength={300}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Explique os horários de encontro, canal de dúvidas e acordos de convivência mútua..."
              className="w-full p-3.5 rounded-xl bg-white text-[#1f1b19] placeholder:text-[#8a726a]/60 text-[14px] shadow-xs border border-[#f0e6e2] focus:outline-none focus:ring-2 focus:ring-[#9f3c16]/20 transition-all resize-none"
            />
          </div>

          {/* Configurações de Foco e Ritmo */}
          <div className="p-4 rounded-2xl bg-[#fcf1ee] shadow-xs border border-[#dec0b7]/40 flex flex-col gap-3.5">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#9f3c16] text-[20px]">tune</span>
              <span className="text-[15px] font-bold text-[#1f1b19]">Configurações de Foco e Ritmo</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-[12px] font-semibold text-[#57423b]">Intensidade Semanal Sugerida</span>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setIntensity('moderate')}
                  className={`flex flex-col items-start p-3 rounded-xl transition-all text-left active:scale-[0.98] border ${
                    intensity === 'moderate'
                      ? 'bg-white border-[#9f3c16] shadow-sm'
                      : 'bg-white/60 border-transparent text-[#57423b]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[13px] font-bold text-[#1f1b19]">Moderado</span>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        intensity === 'moderate' ? 'bg-[#9f3c16]' : 'bg-[#dec0b7]'
                      }`}
                    ></span>
                  </div>
                  <span className="text-[12px] text-[#57423b] mt-1">4h por semana</span>
                  <span className="text-[11px] text-[#954551] font-semibold mt-1">Constância leve</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIntensity('intensive')}
                  className={`flex flex-col items-start p-3 rounded-xl transition-all text-left active:scale-[0.98] border ${
                    intensity === 'intensive'
                      ? 'bg-white border-[#9f3c16] shadow-sm'
                      : 'bg-white/60 border-transparent text-[#57423b]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[13px] font-bold text-[#9f3c16]">Intensivo</span>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        intensity === 'intensive' ? 'bg-[#9f3c16]' : 'bg-[#dec0b7]'
                      }`}
                    ></span>
                  </div>
                  <span className="text-[12px] text-[#57423b] mt-1">8h por semana</span>
                  <span className="text-[11px] text-[#9f3c16] font-bold mt-1">Imersão em provas</span>
                </button>
              </div>
            </div>

            {/* Limite de Membros */}
            <div className="flex flex-col gap-1.5 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-semibold text-[#57423b]">Limite de Membros</span>
                <span className="text-[13px] font-bold text-[#9f3c16]">{membersLimit} estudantes</span>
              </div>
              <input
                type="range"
                min={4}
                max={30}
                value={membersLimit}
                onChange={(e) => setMembersLimit(parseInt(e.target.value, 10))}
                className="w-full accent-[#9f3c16] h-2 bg-[#ebe0dd] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between items-center text-[#57423b] text-[11px] pt-0.5">
                <span>Mín: 4</span>
                <span className="text-[#954551] font-medium">Máximo pedagógico: 30</span>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col gap-2.5 pt-2">
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-[#9f3c16] text-white text-[14px] font-bold shadow-md hover:bg-[#bf542c] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px] fill">add_circle</span>
              <span>Criar grupo</span>
            </button>
            <button
              type="button"
              onClick={onBack}
              className="w-full h-12 rounded-xl bg-[#f6ece8] text-[#954551] text-[13px] font-bold hover:bg-[#ebe0dd] active:scale-[0.98] transition-all flex items-center justify-center"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
