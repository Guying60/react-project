import { create } from "zustand";

interface EditorState {
  scale: number;
  isProcessing: boolean;
  setScale: (scale: number) => void;
  setIsProcessing: (status: boolean) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  scale: 1,
  isProcessing: false,
  setScale: (scale) => set({ scale }),
  setIsProcessing: (status) => set({ isProcessing: status }),
}));
