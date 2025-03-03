import { useEffect } from "react"
import { deleteLegend } from "../services/api"
import { LegendCard } from "../components/legend-list/LegendCard"
import { toast } from "sonner"
import { LegendList } from "../components/legend-list/LegendList"
import { Loading } from "../../../components/ui/loading"
import { useLegendsStore } from "../stores/useLegends.store"

export const Home = () => {
  const {
    error, legends, loading,
    getLegendsStore, deleteLegendStore
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

  return (
    <>
      <h1 className="text-3xl text-gray-950 font-black text-center md:text-4xl">
        Leyendas Costarricenses
      </h1>

      <main>
        

        <LegendList
          loading={loading}
          error={error}
          legends={legends}
          onLoading={<Loading className="mt-4 h-[90dvh] flex justify-center pt-56" />}
          onError={
            <li className="mt-10 text-center">
              <p>{error}</p>
              <p>Por favor, intenta recargar la página.</p>
            </li>
          }
          onEmpty={<li></li>}
        >
          {
            (legends) => legends.map((legend) => (
              <LegendCard
                key={legend.id}
                legend={legend}
                onDelete={() => onDelete(legend.id)}
              />
            ))
          }
        </LegendList>
      </main>
    </>
  )
}
