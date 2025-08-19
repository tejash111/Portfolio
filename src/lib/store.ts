import { create } from 'zustand';

type CurrPageState = {
  page: string;
    setPage: (page: string) => void;
};

export const useCurrPage = create<CurrPageState>((set) => ({
  page: 'home',
  setPage: (page: string) => set({ page }),
}));