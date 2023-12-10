import { create } from 'zustand';

type menuState = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useMenuStore = create<menuState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

type bgState = {
  bgClass: string;
  setBgClass: (bgClass: string) => void;
};

export const useBgStore = create<bgState>((set) => ({
  bgClass: 'bg-gray-950',
  setBgClass: (bgClass) => set({ bgClass }),
}));
