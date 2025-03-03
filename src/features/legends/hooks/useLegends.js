import { useEffect } from "react"
import { useLegendsStore } from "../stores/useLegends.store"
import { deleteLegend } from "../services/api"
import { toast } from "sonner"

export const useLegends = () => {
  const {
    error, legendsFiltered, loading, filters,
    getLegendsStore, deleteLegendStore, getBy,
    setFilters, filterLegends, clearFilters,
    openFilters, toggleOpenFilters
  } = useLegendsStore(state => state)

  useEffect(() => {
    getLegendsStore()
  }, [getLegendsStore])

  const onDelete = async (legendId) => {
    const { error, message } = await deleteLegend(legendId)

    if (error) {
      toast.error(message)

      return
    }

    deleteLegendStore(legendId)
    toast.success(message)
  }

  return {
    error, legendsFiltered, loading, filters,
    getBy, setFilters, filterLegends, clearFilters,
    openFilters, toggleOpenFilters, onDelete
  }
}