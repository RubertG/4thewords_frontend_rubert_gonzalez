import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { legendSchema } from "../schemas/legend.schema"

export const useLegendForm = (defaultValues) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(legendSchema),
    values: defaultValues
  })
  const imageFile = watch("image_url")

  return {
    register,
    handleSubmit,
    errors,
    imageFile
  }
}