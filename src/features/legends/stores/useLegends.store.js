import { create } from "zustand";
import { getLegends } from "../services/api";

const apiStore = (set, get) => ({
  legends: [],
  legendsFiltered: [],
  loading: false,
  error: "",
  openFilters: false,
  filters: {
    name: "",
    category: "",
    province: "",
    canton: "",
    district: "",
    legend_date: ""
  },

  setFilters: (key, value) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value
      }
    }))
  },
  
  clearFilters: () => {
    set({ filters: { name: "", category: "", province: "", canton: "", district: "", legend_date: "" } })
    get().toggleOpenFilters()
    get().setLegendsFiltered(get().legends)
  },

  setLegendsFiltered: (legends) => set({ legendsFiltered: legends }),
  setLegends: (legends) => set({ legends }),
  setLoading: (isLoading) => set({ loading: isLoading }),
  setError: (message) => set({ error: message }),
  toggleOpenFilters: () => set({ openFilters: !get().openFilters }),

  getLegendsStore: async () => {
    get().setLoading(true)
    const { error, data, message } = await getLegends()

    if (error) {
      get().setError(message)
      get().setLoading(false)

      return
    }

    get().setLegends(data)
    get().setLegendsFiltered(data)
    get().setError("")
    get().setLoading(false)
  },

  deleteLegendStore: (legendId) => {
    const newLegends = get().legends.filter((legend) => legend.id !== legendId)
    set({ legends: newLegends, legendsFiltered: newLegends })
  },

  getBy: (key) => {
    const values = get().legends.map(legend => legend[key])

    return [...new Set(values)]
  },
  
  filterLegends: () => {
    const { legends, filters } = get()

    const filteredLegends = legends.filter(legend => {
      return Object.keys(filters).every(key => {
        if (!filters[key]) return true

        if (key === "legend_date") {
          const filterDate = new Date(filters[key]).toISOString().split('T')[0]
          const legendDate = new Date(legend[key]).toISOString().split('T')[0]
          console.log(filterDate, legendDate)

          return legendDate === filterDate
        }

        return legend[key].toLowerCase().includes(filters[key].toLowerCase())
      })
    })

    get().setLegendsFiltered(filteredLegends)
  }
});

export const useLegendsStore = create(apiStore);