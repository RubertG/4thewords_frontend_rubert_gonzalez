import { useState } from "react"

export const useDeleteConfirmation = (onDelete) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleDelete = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleDeleteConfirmation = async () => {
    setLoading(true)
    await onDelete()
    setLoading(false)
    setIsModalOpen(false)
  }

  return {
    isModalOpen,
    loading,
    handleDelete,
    handleDeleteConfirmation
  }
}
