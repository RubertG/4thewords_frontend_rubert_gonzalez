import clsx from "clsx"
import { Badge } from "../../../../components/ui/Badge"
import { UbicationItem } from "./UbicationItem"
import dayjs from "../../../../utils/dayjsConfig"
import { LegendButtons } from "./LegendButtons"

export const LegendCard = ({
  legend, className, onDelete
}) => {
  const formatted_creation_date = new Date(legend.legend_date).toLocaleDateString("es-CR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  const timeSinceCreation = dayjs(legend.created_at).fromNow()

  return (
    <li
      className={clsx(
        "border-b border-gray-200 py-10 last:border-b-0 overflow-hidden w-full md:px-3 md:py-8",
        className
      )}
    >
      <header className="flex justify-between items-center mb-5 w-full overflow-hidden gap-4">
        <h2 className="text-xl lg:text-2xl text-gray-950 font-bold overflow-hidden">{legend.name}</h2>
        <Badge className="block">{legend.category}</Badge>
      </header>

      <div className="flex flex-col gap-4 w-full md:flex-row">
        <img
          className="w-full object-cover object-center rounded-xl aspect-[4/3] bg-gray-200 md:max-w-56"
          src={legend.image_url}
          alt={legend.name}
        />

        <div>
          <p>
            {legend.description}{" "}
            <i className="text-gray-600 text-sm">{formatted_creation_date}.</i>
          </p>

          <ul className="flex gap-x-4 gap-y-2 flex-wrap mt-2">
            <UbicationItem value={legend.province} label="Provincia" />
            <UbicationItem value={legend.canton} label="Cantón" />
            <UbicationItem value={legend.district} label="Distrito" />
          </ul>

          <div className="mt-2 flex items-center justify-between flex-wrap gap-2">
            <i className="text-gray-600 text-sm">Creado {timeSinceCreation}.</i>

            <LegendButtons
              legend={legend}
              onDelete={onDelete}
            />
          </div>
        </div>
      </div>
    </li>
  )
}
