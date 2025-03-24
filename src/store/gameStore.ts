import { create } from 'zustand';

interface GameState {
  isMuted: boolean;
  balance: number;
  user: string;
  picture: string;
  isAuthenticated: boolean;
  sound: string;
  music: string;
  setSound: (sound: string) => void;
  setMusic: (music: string) => void;
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
  sound: "off",
  music: "on",
  setSound: (sound) => set({ sound: sound }),
  setMusic: (music) => set({ music: music }),
  setMuted: (muted) => set({ isMuted: muted }),
  setBalance: (balance) => set({ balance: balance }),
  setAuthenticated: (authenticated) => set({ isAuthenticated: authenticated }),
  setUser: (user, picture) => set({ user, picture })
}));