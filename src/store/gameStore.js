import { create } from 'zustand';

export const useGameStore = create((set) => ({
  isMuted: false,
  balance: 1000,
  isAuthenticated: false,
  user: "New User",
  picture: "",
  sound: "off",
  music: "on",
  setSound: (sound) => set({ sound: sound }),
  setMusic: (newMusic) => set({ music: newMusic }),
  setMuted: (newMuted) => set({ isMuted: newMuted }),
  setBalance: (balance) => set({ balance: balance }),
  setAuthenticated: (authenticated) => set({ isAuthenticated: authenticated }),
  setUser: (user, picture) => set({ user, picture })
}));