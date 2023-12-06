import { create } from "zustand";

interface SnippetState {
  snippestNames: string[];
  addSnippetName: (name: string) => void;
  setSnippetNames: (names: string[]) => void;
}

export const useSnippetStore = create<SnippetState>((set) => ({
  snippestNames: [],
  addSnippetName: (name) => {
    set((state) => ({
      snippestNames: [...state.snippestNames, name],
    }));
  },
  setSnippetNames: (names) => {
    set({
      snippestNames: names,
    });
  },
}));
