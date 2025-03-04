import { useParams } from "react-router"
import { BackButton } from "../../../components/ui/BackButton"
import { Title } from "../../../components/ui/Title"
import { LegendForm } from "../components/forms/LegendForm"
import { useEditLegend } from "../hooks/useEditLegend"

export const EditLegend = () => {
  const { id } = useParams()
  const { loading, onSubmit, defaultValues } = useEditLegend(id)

  return (
    <>
      <BackButton to="/" text="Volver" />

      <Title className="mt-3">
        Editar leyenda
      </Title>

      <main>
        <LegendForm
          loading={loading}
          onSubmit={onSubmit}
          defaultValues={defaultValues}
          className="mt-10"
        />
      </main>
    </>
  )
}