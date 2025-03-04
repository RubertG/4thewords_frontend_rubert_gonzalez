import { toast } from "sonner"
import { saveImageFirebase } from "../../../utils/saveImageFirebase"
import { createLegend } from "../services/api"
import { useState } from "react"
import { useNavigate } from "react-router"

export const useCreateLegend = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    setLoading(true)
    const { url, error, message } = await saveImageFirebase(data.image_url[0])

    if (error) {
      toast.error(message)
      setLoading(false)

      return
    }

    const legend = {
      ...data,
      image_url: url
    }

    const { error: createLegendError, message: createLegendMessage } = await createLegend(legend)

    if (createLegendError) {
      toast.error(createLegendMessage)
      setLoading(false)

      return
    }

    setLoading(false)
    toast.success(createLegendMessage)
    navigate("/")
  }

  return {
    loading,
    onSubmit
  }
}