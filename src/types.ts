export type ScreenType = 
  | 'inicio'
  | 'disciplinas'
  | 'biologia-trilha'
  | 'conteudo-ciclo-celular'
  | 'quiz-ciclo-celular'
  | 'resultado-quiz'
  | 'grupos'
  | 'grupo-detalhes'
  | 'criar-grupo'
  | 'progresso'
  | 'perfil'
  | 'login'
  | 'cadastro';

export interface UserProfile {
  name: string;
  email: string;
  objective: string;
  avatarUrl: string;
  streakDays: number;
  completedModules: number;
  accuracyRate: number;
  totalHours: string;
  focusMode: boolean;
}

export interface Discipline {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  progressPercent: number;
  completedCount: number;
  totalCount: number;
  tag?: string;
  tagType?: 'quiz' | 'practice' | 'review' | 'new';
  icon: string;
  status: 'progress' | 'completed';
}

export interface StudyGroup {
  id: string;
  name: string;
  disciplines: string[];
  membersCount: number;
  activeNow?: number;
  isMember: boolean;
  weeklyGoal: string;
  dailyProgress?: {
    current: number;
    target: number;
  };
  streakDays?: number;
  tag: string;
  icon: string;
  description: string;
  intensity: 'moderate' | 'intensive';
}

export interface QuizQuestion {
  id: number;
  question: string;
  topic: string;
  xp: number;
  level: string;
  diagramUrl?: string;
  diagramCaption?: string;
  options: {
    letter: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
  hint: string;
}
