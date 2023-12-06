import { create } from "zustand";

interface Snippet {
  name: string;
  code: string | null;
}

interface SnippetState {
  snippestNames: string[];
  selectedSnippet: Snippet|null;
  addSnippetName: (name: string) => void;
  setSnippetNames: (names: string[]) => void;
  setSelectedSnippet: (name: Snippet|null) => void;
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
