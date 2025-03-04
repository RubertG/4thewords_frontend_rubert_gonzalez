import { toast } from "sonner"
import { saveImageFirebase } from "../../../utils/saveImageFirebase"
import { getLegend, updateLegend } from "../services/api"
import { useState } from "react"
import { useNavigate } from "react-router"
import { useEffect } from "react"

export const useEditLegend = (id) => {
  const [loading, setLoading] = useState(false)
  const [defaultValues, setDefaultValues] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const getDefaultValue = async () => {
      const { error, data, message } = await getLegend(id)

      if (error) {
        toast.error(message)
        navigate("/")

        return
      }

      setDefaultValues(data)
    }

    getDefaultValue()
  }, [id, navigate])

  const onSubmit = async (data) => {
    setLoading(true)

    if (typeof data.image_url !== "string") {
      const { url, error, message } = await saveImageFirebase(data.image_url[0])

      if (error) {
        toast.error(message)
        setLoading(false)

        return
      }

      data.image_url = url
    }

    const { error: createLegendError, message: createLegendMessage } = await updateLegend(id, data)

    if (createLegendError) {
      toast.error(createLegendMessage)
      setLoading(false)

      return
    }

    setLoading(false)
    toast.success(createLegendMessage)
    navigate("/")
    setLoading(false)

  }

  return {
    loading,
    onSubmit,
    defaultValues
  }
}