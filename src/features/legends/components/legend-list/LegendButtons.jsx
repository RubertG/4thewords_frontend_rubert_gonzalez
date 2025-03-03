import { Link } from "react-router"
import { Button } from "../../../../components/ui/Button"
import { Modal } from "../../../../components/ui/Modal"
import { useDeleteConfirmation } from "../../hooks/useDeleteConfirmation"

export const LegendButtons = ({
  legend,
  onDelete
}) => {
  const { isModalOpen, loading, handleDelete, handleDeleteConfirmation } = useDeleteConfirmation(onDelete)

  return (
    <>
      <div>
        <Button
          variant="ghost"
          size="small"
          onClick={handleDelete}
        >
          Eliminar
        </Button>

        <Link to={`/editar-leyenda/${legend.id}`}>
          <Button
            className="ml-2"
            size="small"
          >
            Editar
          </Button>
        </Link>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleDelete}
      >
        <h2 className="text-lg font-bold text-gray-950 text-center">
          ¿Estás seguro de eliminar esta leyenda?
        </h2>
        <p className="mt-2 text-sm">
          Recuerda que la leyenda <strong>"{legend.name}"</strong> se eliminará permanentemente y ya no podrás recuperarla.
        </p>

        <footer className="mt-3 flex justify-end gap-2">
          <Button
            size="small"
            variant="ghost"
            onClick={handleDelete}
          >
            Cancelar
          </Button>
          <Button
            size="small"
            onClick={handleDeleteConfirmation}
            variant="danger"
          >
            {loading ? "Eliminando..." : "Eliminar"}
          </Button>
        </footer>
      </Modal>
    </>
  )
}