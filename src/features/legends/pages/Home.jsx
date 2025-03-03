import { LegendCard } from "../components/legend-list/LegendCard"
import { LegendList } from "../components/legend-list/LegendList"
import { Loading } from "../../../components/ui/loading"
import { Button } from "../../../components/ui/Button"
import { LegendFilters } from "../components/legend-filters/legent-filters"
import { Filter } from "lucide-react"
import { useLegends } from "../hooks/useLegends"

export const Home = () => {
  const {
    error, legendsFiltered, loading, filters,
    onDelete, getBy,
    setFilters, filterLegends, clearFilters,
    openFilters, toggleOpenFilters
  } = useLegends(state => state)

  return (
    <>
      <h1 className="text-3xl text-gray-950 font-black text-center md:text-4xl">
        Leyendas Costarricenses
      </h1>

      <main className="mt-8">
        <section>
          <div className="flex justify-between items-center">
            <Button size="small">
              Agregar leyenda
            </Button>

            <Button
              variant="outline"
              size="small"
              className="ml-4"
              onClick={toggleOpenFilters}
            >
              <Filter />
              Filtros
            </Button>
          </div>

          {
            openFilters && (
              <section className="my-6 fade-in">
                <LegendFilters
                  getBy={getBy}
                  filters={filters}
                  setFilters={setFilters}
                  filterLegends={filterLegends}
                  clearFilters={clearFilters}
                />
              </section>
            )
          }
        </section>

        <LegendList
          className="mt-8"
          loading={loading}
          error={error}
          legends={legendsFiltered}
          onLoading={<Loading className="mt-4 h-[90dvh] flex justify-center pt-56" />}
          onError={
            <li className="mt-10 text-center">
              <p>{error}</p>
              <p>Por favor, intenta recargar la página.</p>
            </li>
          }
          onEmpty={
            <li>
              <p className="text-center mt-10">No se encontraron leyendas.</p>
            </li>
          }
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
