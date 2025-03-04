import { BackButton } from "../../../components/ui/BackButton"
import { Title } from "../../../components/ui/Title"
import { LegendForm } from "../components/forms/LegendForm"
import { useCreateLegend } from "../hooks/useCreateLegend"

export const CreateLegend = () => {
  const { loading, onSubmit } = useCreateLegend()  

  return (
    <>
      <BackButton to="/" text="Volver" />

      <Title className="mt-3">
        Crear leyenda
      </Title>

      <main>
        <LegendForm
          loading={loading}
          onSubmit={onSubmit}
          className="mt-10"
        />
      </main>
    </>
  )
}