import { create } from 'zustand'
import type { AnalysisResult } from '@/types/analysis'

type Phase = 'idle' | 'loading' | 'results'

interface UiStore {
  phase: Phase
  sidebarOpen: boolean
  lastResult: AnalysisResult | null
  setPhase: (phase: Phase) => void
  setSidebarOpen: (open: boolean) => void
  setLastResult: (result: AnalysisResult | null) => void
}

export const useUiStore = create<UiStore>((set) => ({
  phase: 'idle',
  sidebarOpen: false,
  lastResult: null,
  setPhase: (phase) => set({ phase }),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setLastResult: (result) => set({ lastResult: result }),
}))
