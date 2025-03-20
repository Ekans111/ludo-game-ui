import { create } from 'zustand';

interface GameState {
  isMuted: boolean;
  balance: number;
  isAuthenticated: boolean;
  setMuted: (muted: boolean) => void;
  setBalance: (balance: number) => void;
  setAuthenticated: (authenticated: boolean) => void;
}

export const useGameStore = create<GameState>((set) => ({
  isMuted: false,
  balance: 0,
  isAuthenticated: false,
  setMuted: (muted) => set({ isMuted: muted }),
  setBalance: (balance) => set({ balance: balance }),
  setAuthenticated: (authenticated) => set({ isAuthenticated: authenticated }),
}));