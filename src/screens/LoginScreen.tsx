import React, { useState } from 'react';
import { APP_IMAGES } from '../data/mockData';
import { ScreenType } from '../types';

interface LoginScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onLoginSuccess: (email: string) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onNavigate, onLoginSuccess }) => {
  const [identifier, setIdentifier] = useState('marina.estudos@email.com');
  const [password, setPassword] = useState('vestibular2025');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier || !password) {
      setFeedback('Por favor, preencha todos os campos para continuar.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(identifier);
      onNavigate('inicio');
    }, 700);
  };

  return (
    <div className="flex flex-col w-full px-5 pb-10 pt-2">
      {/* Pílula de Acolhimento */}
      <div className="flex justify-center mt-2 mb-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0e6e2] shadow-xs border border-[#dec0b7]/40">
          <span className="w-2 h-2 rounded-full bg-[#9f3c16] animate-pulse"></span>
          <span className="text-[11px] text-[#57423b] font-medium">
            Ambiente livre de distrações e focado em aprovação
          </span>
        </div>
      </div>

      {/* Identidade Visual & Boas-vindas */}
      <div className="flex flex-col items-center text-center mb-5">
        <div className="w-full max-w-[240px] flex justify-center mb-3">
          <img
            alt="Logo Conecta Estudo"
            className="h-12 w-auto object-contain drop-shadow-xs"
            src={APP_IMAGES.logo}
          />
        </div>
        <h1 className="text-[24px] font-bold text-[#1f1b19] tracking-tight">
          Bem-vindo de volta
        </h1>
        <p className="text-[13px] text-[#57423b] max-w-xs mt-1">
          Acesse sua conta para continuar sua rotina de estudos e metas colaborativas.
        </p>
      </div>

      {/* Card Principal de Login */}
      <div className="w-full bg-white rounded-2xl p-5 shadow-sm border border-[#f0e6e2] flex flex-col gap-4">
        {feedback && (
          <div className="flex items-start gap-2 p-3 rounded-xl bg-[#fcf1ee] border border-[#dec0b7] text-[#954551] text-[12px]">
            <span className="material-symbols-outlined text-[18px] text-[#9f3c16] shrink-0 mt-0.5">info</span>
            <span>{feedback}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          {/* E-mail ou CPF */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-[12px] font-bold text-[#1f1b19]" htmlFor="identifier">
                E-mail ou CPF
              </label>
              <span className="text-[11px] text-[#57423b]">Estudante</span>
            </div>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-[#8a726a] text-[20px] pointer-events-none">
                badge
              </span>
              <input
                id="identifier"
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="seu.email@estudo.com"
                className="w-full h-12 pl-11 pr-4 bg-[#fcf1ee] rounded-xl text-[14px] text-[#1f1b19] placeholder:text-[#8a726a]/60 border border-[#dec0b7]/40 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#9f3c16]/30 transition-all"
              />
            </div>
          </div>

          {/* Senha */}
          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-bold text-[#1f1b19]" htmlFor="password">
              Senha
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-[#8a726a] text-[20px] pointer-events-none">
                lock
              </span>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-12 pl-11 pr-11 bg-[#fcf1ee] rounded-xl text-[14px] text-[#1f1b19] placeholder:text-[#8a726a]/60 border border-[#dec0b7]/40 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#9f3c16]/30 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Alternar exibição da senha"
                className="absolute right-2.5 w-8 h-8 flex items-center justify-center text-[#8a726a] hover:text-[#1f1b19]"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          {/* Lembrar & Esqueci */}
          <div className="flex items-center justify-between pt-0.5">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded accent-[#9f3c16] cursor-pointer"
              />
              <span className="text-[12px] text-[#57423b] font-medium">Lembrar de mim</span>
            </label>
            <button
              type="button"
              onClick={() => alert('Link de recuperação de senha enviado para o e-mail.')}
              className="text-[12px] text-[#954551] font-semibold hover:text-[#9f3c16] transition-colors"
            >
              Esqueceu a senha?
            </button>
          </div>

          {/* Botão de Entrar */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 mt-1 bg-[#9f3c16] text-white rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 shadow-md hover:bg-[#bf542c] active:scale-[0.98] transition-all"
          >
            {isLoading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                <span>Entrar</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </>
            )}
          </button>
        </form>

        {/* Divisor Visual */}
        <div className="relative flex items-center justify-center my-1">
          <div className="w-full h-px bg-[#f0e6e2]"></div>
          <span className="absolute px-3 bg-white text-[11px] text-[#8a726a] tracking-wider uppercase font-semibold">
            ou continue com
          </span>
        </div>

        {/* Métodos Alternativos */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => {
              onLoginSuccess('estudante.gov@gov.br');
              onNavigate('inicio');
            }}
            className="h-11 px-3 rounded-xl bg-[#f6ece8] flex items-center justify-center gap-2 hover:bg-[#f0e6e2] active:scale-95 transition-all text-[#1f1b19] border border-[#dec0b7]/30"
          >
            <div className="w-6 h-6 rounded-full bg-[#bf542c] text-white flex items-center justify-center text-[10px] font-bold">
              BR
            </div>
            <span className="text-[12px] font-bold">Conta Gov.br</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onLoginSuccess('aluno@universidade.edu.br');
              onNavigate('inicio');
            }}
            className="h-11 px-3 rounded-xl bg-[#f6ece8] flex items-center justify-center gap-2 hover:bg-[#f0e6e2] active:scale-95 transition-all text-[#1f1b19] border border-[#dec0b7]/30"
          >
            <span className="material-symbols-outlined text-[#9f3c16] text-[20px]">school</span>
            <span className="text-[12px] font-bold">Institucional</span>
          </button>
        </div>
      </div>

      {/* Cartão de Estudantes Ativos */}
      <div className="mt-4 p-3.5 bg-[#fcf1ee] rounded-2xl flex items-center justify-between gap-3 shadow-xs border border-[#dec0b7]/40">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 rounded-full bg-[#ffdbce] text-[#7f2b00] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[20px] fill">local_fire_department</span>
          </div>
          <div className="min-w-0">
            <h4 className="text-[13px] font-bold text-[#1f1b19] truncate">3.420 estudantes ativos</h4>
            <p className="text-[11px] text-[#57423b] truncate">Salas de estudo em tempo real</p>
          </div>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#9f3c16] animate-ping"></span>
          <span className="text-[11px] text-[#954551] font-bold">AO VIVO</span>
        </div>
      </div>

      {/* Rodapé para Cadastro */}
      <div className="mt-6 flex flex-col items-center justify-center text-center gap-1">
        <p className="text-[13px] text-[#57423b]">Ainda não tem uma conta?</p>
        <button
          onClick={() => onNavigate('cadastro')}
          type="button"
          className="text-[14px] text-[#9f3c16] hover:underline font-bold inline-flex items-center gap-1"
        >
          <span>Criar conta gratuitamente</span>
          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
        </button>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[11px] text-[#8a726a]">
          Plataforma segura e alinhada com as diretrizes do MEC e LGPD.
        </p>
      </div>
    </div>
  );
};
