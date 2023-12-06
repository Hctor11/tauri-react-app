import { create } from "zustand";

interface SnippetState {
  snippestNames: string[];
  selectedSnippet: string|null;
  addSnippetName: (name: string) => void;
  setSnippetNames: (names: string[]) => void;
  setSelectedSnippet: (name: string|null) => void;
}

export const useSnippetStore = create<SnippetState>((set) => ({
  snippestNames: [],
  selectedSnippet: null,
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
  setSelectedSnippet: (snippet) => {
    set({
      selectedSnippet: snippet,
    });
  }
}));
