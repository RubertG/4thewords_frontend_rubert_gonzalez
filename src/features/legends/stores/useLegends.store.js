import { create } from "zustand";
import { getLegends } from "../services/api";

const apiStore = (set, get) => ({
  legends: [],
  loading: false,
  error: "",

  setLegends: (legends) => set({ legends }),
  setLoading: (isLoading) => set({ loading: isLoading }),
  setError: (message) => set({ error: message }),

  getLegendsStore: async () => {
    get().setLoading(true)
    const { error, data, message } = await getLegends()
    
    if (error) {
      get().setError(message)
      get().setLoading(false)

      return
    }

    get().setLegends(data)
    get().setError("")
    get().setLoading(false)
  },

  deleteLegendStore: (legendId) => {
    const newLegends = get().legends.filter((legend) => legend.id !== legendId)
    set({ legends: newLegends })
  }
});

export const useLegendsStore = create(apiStore);