import { useEffect, useState } from "react"
import { deleteLegend, getLegends } from "../services/api"
import { LegendCard } from "../components/legend-list/LegendCard"
import { toast } from "sonner"
import { LegendList } from "../components/legend-list/LegendList"
import { Loading } from "../../../components/ui/loading"

export const Home = () => {
  const [legends, setLegends] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchLegends = async () => {
      const { error, data, message } = await getLegends()

      if (error) {
        setError(message)
        setLoading(false)

        return
      }

      setLegends(data)
      setLoading(false)
    }

    fetchLegends()
  }, [])

  const onDelete = async (legendId) => {
    const { error, message } = await deleteLegend(legendId)

    if (error) {
      toast.error(message)

      return
    }

    const newLegends = legends.filter((legend) => legend.id !== legendId)
    setLegends(newLegends)
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
          onError={<li>Ocurrió un error al cargar las leyendas</li>}
          onEmpty={<li>No hay leyendas para mostrar</li>}
        >
          {
            (legends) => legends.map((legend) => (
              <LegendCard
                key={legend.id}
                legend={legend}
                onDelete={onDelete}
              />
            ))
          }
        </LegendList>
      </main>
    </>
  )
}
