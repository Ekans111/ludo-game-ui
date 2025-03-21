import { create } from 'zustand';

interface GameState {
  isMuted: boolean;
  balance: number;
  user: string;
  picture: string;
  isAuthenticated: boolean;
  setMuted: (muted: boolean) => void;
  setBalance: (balance: number) => void;
  setAuthenticated: (authenticated: boolean) => void;
  setUser: (name: string, picture: string) => void;
}

export const useGameStore = create<GameState>((set) => ({
  isMuted: false,
  balance: 0,
  isAuthenticated: false,
  user: "New User",
  picture: "",
  setMuted: (muted) => set({ isMuted: muted }),
  setBalance: (balance) => set({ balance: balance }),
  setAuthenticated: (authenticated) => set({ isAuthenticated: authenticated }),
  setUser: (user, picture) => set({ user, picture })
}));