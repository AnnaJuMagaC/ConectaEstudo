import React, { useState } from 'react';
import { APP_IMAGES } from '../data/mockData';
import { ScreenType, UserProfile } from '../types';

interface CadastroScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onRegisterSuccess: (name: string, email: string, track: string) => void;
}

export const CadastroScreen: React.FC<CadastroScreenProps> = ({
  onNavigate,
  onRegisterSuccess,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('vestibulares');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const getStrength = (val: string) => {
    if (!val) return { score: 0, label: 'Muito curta', color: 'text-[#954551]' };
    let score = 0;
    if (val.length >= 6) score++;
    if (val.length >= 8 && /[A-Z]/.test(val)) score++;
    if (val.length >= 8 && /[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    switch (score) {
      case 1:
        return { score: 1, label: 'Fraca', color: 'text-[#ba1a1a]' };
      case 2:
        return { score: 2, label: 'Razoável', color: 'text-[#9e3d0c]' };
      case 3:
        return { score: 3, label: 'Forte', color: 'text-[#9f3c16]' };
      case 4:
      default:
        return { score: 4, label: 'Excelente', color: 'text-[#4E7A4A]' };
    }
  };

  const strength = getStrength(password);

  const tracks = [
    {
      id: 'vestibulares',
      title: 'ENEM & Vestibulares',
      desc: 'Foco em redação, exatas e cronogramas',
      icon: 'school',
    },
    {
      id: 'concursos',
      title: 'Concursos Públicos',
      desc: 'Direito, bancas examinadoras e editais',
      icon: 'account_balance',
    },
    {
      id: 'graduacao',
      title: 'Graduação / Ensino Superior',
      desc: 'TCC, disciplinas e grupos de leitura',
      icon: 'menu_book',
    },
    {
      id: 'tecnologia',
      title: 'Tecnologia & Habilidades',
      desc: 'Programação, design e idiomas',
      icon: 'terminal',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg('Por favor, informe seu nome e e-mail.');
      return;
    }
    if (password.length < 6) {
      setErrorMsg('A senha precisa ter no mínimo 6 caracteres.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg('As senhas digitadas não coincidem.');
      return;
    }
    if (!agreeTerms) {
      setErrorMsg('É necessário concordar com o compromisso de estudo.');
      return;
    }

    const trackObj = tracks.find((t) => t.id === selectedTrack);
    onRegisterSuccess(name.trim(), email.trim(), trackObj?.title || 'Estudante');
    onNavigate('inicio');
  };

  return (
    <div className="flex flex-col w-full px-5 pb-10 pt-2">
      {/* Brand Showcase & Welcome Header */}
      <div className="flex flex-col items-center text-center mt-1 mb-4">
        <div className="relative mb-2">
          <div className="w-14 h-14 rounded-2xl bg-[#ffdbcf] flex items-center justify-center shadow-xs">
            <img
              alt="Logo Conecta Estudo"
              className="w-10 h-10 object-contain rounded-xl"
              src={APP_IMAGES.logoSquare}
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white flex items-center justify-center shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#9f3c16] animate-pulse"></span>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#ffd9dc] text-[#3f0211] text-[11px] font-bold uppercase tracking-wider mb-1">
          <span className="material-symbols-outlined text-[14px]">auto_stories</span>
          Novo Ingresso
        </span>

        <h1 className="text-[22px] font-bold text-[#1f1b19] tracking-tight">
          Comece sua jornada de estudos
        </h1>
        <p className="text-[13px] text-[#57423b] max-w-xs mt-1">
          Junte-se a uma comunidade focada em aprendizado real, metas diárias e grupos colaborativos.
        </p>
      </div>

      {errorMsg && (
        <div className="mb-3 p-3 bg-[#ffdad6] text-[#93000a] text-[12px] font-semibold rounded-xl flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">error</span>
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Registration Card Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Identificação do Estudante */}
        <div className="bg-white p-4 rounded-2xl shadow-xs border border-[#f0e6e2] flex flex-col gap-3">
          <div className="flex items-center gap-1.5 text-[#9f3c16]">
            <span className="material-symbols-outlined text-[20px]">badge</span>
            <span className="text-[13px] font-bold text-[#1f1b19]">Identificação do Estudante</span>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-semibold text-[#57423b]" htmlFor="reg-name">
              Nome Completo
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-[#8a726a] text-[20px] pointer-events-none">
                person
              </span>
              <input
                id="reg-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Marina Silveira"
                className="w-full h-12 pl-11 pr-4 rounded-xl bg-[#fcf1ee] text-[#1f1b19] text-[14px] placeholder:text-[#8a726a]/60 border border-[#dec0b7]/40 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#9f3c16]/30 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-semibold text-[#57423b]" htmlFor="reg-email">
              E-mail para acesso
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-[#8a726a] text-[20px] pointer-events-none">
                mail
              </span>
              <input
                id="reg-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="marina.estudos@email.com"
                className="w-full h-12 pl-11 pr-4 rounded-xl bg-[#fcf1ee] text-[#1f1b19] text-[14px] placeholder:text-[#8a726a]/60 border border-[#dec0b7]/40 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#9f3c16]/30 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Área de Interesse Principal */}
        <div className="bg-white p-4 rounded-2xl shadow-xs border border-[#f0e6e2] flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[#9f3c16]">
              <span className="material-symbols-outlined text-[20px]">explore</span>
              <span className="text-[13px] font-bold text-[#1f1b19]">Área de Interesse Principal</span>
            </div>
            <span className="text-[11px] text-[#954551] font-semibold">1 trilha</span>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {tracks.map((track) => {
              const isSelected = selectedTrack === track.id;
              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => setSelectedTrack(track.id)}
                  className={`flex items-center justify-between p-3 rounded-xl transition-all active:scale-[0.99] text-left border ${
                    isSelected
                      ? 'bg-[#9f3c16] text-white border-[#9f3c16] shadow-sm'
                      : 'bg-[#fcf1ee] text-[#1f1b19] border-transparent hover:bg-[#f6ece8]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-white/20' : 'bg-[#f0e6e2] text-[#9f3c16]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">{track.icon}</span>
                    </span>
                    <div>
                      <p className="text-[13px] font-bold leading-tight">{track.title}</p>
                      <p className={`text-[11px] leading-tight ${isSelected ? 'opacity-90' : 'text-[#57423b]'}`}>
                        {track.desc}
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[20px]">
                    {isSelected ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Credenciais de Acesso */}
        <div className="bg-white p-4 rounded-2xl shadow-xs border border-[#f0e6e2] flex flex-col gap-3">
          <div className="flex items-center gap-1.5 text-[#9f3c16]">
            <span className="material-symbols-outlined text-[20px]">lock</span>
            <span className="text-[13px] font-bold text-[#1f1b19]">Credenciais de Acesso</span>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-semibold text-[#57423b]" htmlFor="reg-password">
              Criar uma Senha
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-[#8a726a] text-[20px] pointer-events-none">
                key
              </span>
              <input
                id="reg-password"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo de 8 caracteres"
                className="w-full h-12 pl-11 pr-11 rounded-xl bg-[#fcf1ee] text-[#1f1b19] text-[14px] placeholder:text-[#8a726a]/60 border border-[#dec0b7]/40 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#9f3c16]/30 transition-all"
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

            {/* Password Strength Meter */}
            <div className="mt-1.5 flex flex-col gap-1">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#57423b]">Força da senha</span>
                <span className={`font-semibold ${strength.color}`}>{strength.label}</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 h-1.5 w-full bg-[#f6ece8] rounded-full overflow-hidden p-0.5">
                <div
                  className={`h-full rounded-full transition-all ${
                    strength.score >= 1 ? 'bg-[#ba1a1a]' : 'bg-transparent'
                  }`}
                ></div>
                <div
                  className={`h-full rounded-full transition-all ${
                    strength.score >= 2 ? 'bg-[#9e3d0c]' : 'bg-transparent'
                  }`}
                ></div>
                <div
                  className={`h-full rounded-full transition-all ${
                    strength.score >= 3 ? 'bg-[#9f3c16]' : 'bg-transparent'
                  }`}
                ></div>
                <div
                  className={`h-full rounded-full transition-all ${
                    strength.score >= 4 ? 'bg-[#4E7A4A]' : 'bg-transparent'
                  }`}
                ></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 pt-0.5">
            <label className="text-[12px] font-semibold text-[#57423b]" htmlFor="reg-confirm">
              Confirmar Senha
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-[#8a726a] text-[20px] pointer-events-none">
                lock_reset
              </span>
              <input
                id="reg-confirm"
                type={showPassword ? 'text' : 'password'}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Digite a senha novamente"
                className="w-full h-12 pl-11 pr-11 rounded-xl bg-[#fcf1ee] text-[#1f1b19] text-[14px] placeholder:text-[#8a726a]/60 border border-[#dec0b7]/40 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#9f3c16]/30 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Compromisso Ético */}
        <div className="bg-[#fcf1ee] p-3.5 rounded-2xl flex flex-col gap-2 border border-[#dec0b7]/40">
          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded accent-[#9f3c16] cursor-pointer"
            />
            <div className="flex flex-col">
              <span className="text-[12px] font-bold text-[#1f1b19] leading-snug">
                Compromisso Ético &amp; Foco
              </span>
              <span className="text-[11px] text-[#57423b] mt-0.5 leading-relaxed">
                Aceito os termos de convivência respeitosa da comunidade e me comprometo a cultivar um ambiente de estudo sem distrações.
              </span>
            </div>
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full h-12 rounded-xl bg-[#9f3c16] text-white text-[14px] font-bold flex items-center justify-center gap-2 shadow-md hover:bg-[#bf542c] active:scale-[0.98] transition-all"
        >
          <span>Cadastrar e Começar</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </form>

      {/* Rodapé e Login */}
      <div className="flex flex-col items-center gap-3 text-center pt-3">
        <div className="flex items-center gap-1.5 text-[13px] text-[#57423b]">
          <span>Já faz parte do Conecta Estudo?</span>
          <button
            onClick={() => onNavigate('login')}
            type="button"
            className="text-[13px] text-[#9f3c16] hover:underline font-bold"
          >
            Fazer login
          </button>
        </div>

        <div className="w-full p-3 rounded-xl bg-[#f0e6e2] flex items-center gap-2.5 text-[#57423b] border border-[#dec0b7]/40">
          <span className="material-symbols-outlined text-[#954551] text-[20px]">verified_user</span>
          <p className="text-[11px] text-left leading-snug">
            <strong className="text-[#1f1b19] block">Compromisso Conecta:</strong>
            Seus dados estão protegidos. Plataforma sem algoritmos viciantes.
          </p>
        </div>
      </div>
    </div>
  );
};
