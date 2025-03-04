import * as z from 'zod'

export const legendSchema = z.object({
  name: z.string()
    .min(3, {
      message: 'El nombre de la leyenda debe tener al menos 3 caracteres.'
    }).max(255, {
      message: 'El nombre de la leyenda debe tener como máximo 255 caracteres.'
    }),
  legend_date: z.string().min(1, {
    message: 'La fecha de la leyenda es requerida.'
  }),
  category: z.string()
    .min(3, {
      message: 'La categoría de la leyenda debe tener al menos 3 caracteres.'
    }).max(255, {
      message: 'La categoría de la leyenda debe tener como máximo 255 caracteres.'
    }),
  province: z.string()
    .min(3, {
      message: 'La provincia de la leyenda debe tener al menos 3 caracteres.'
    }).max(255, {
      message: 'La provincia de la leyenda debe tener como máximo 255 caracteres.'
    }),
  canton: z.string()
    .min(3, {
      message: 'El cantón de la leyenda debe tener al menos 3 caracteres.'
    }).max(255, {
      message: 'El cantón de la leyenda debe tener como máximo 255 caracteres.'
    }),
  district: z.string()
    .min(3, {
      message: 'El distrito de la leyenda debe tener al menos 3 caracteres.'
    }).max(255, {
      message: 'El distrito de la leyenda debe tener como máximo 255 caracteres.'
    }),
  description: z.string()
    .min(3, {
      message: 'La descripción de la leyenda debe tener al menos 3 caracteres.'
    }).max(255, {
      message: 'La descripción de la leyenda debe tener como máximo 255 caracteres.'
    }),
  image_url: z.any().refine((fileList) => fileList.length > 0, {
    message: 'Se requiere una imagen.'
  })
})