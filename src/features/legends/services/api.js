import { API_ROUTES } from '../../../services/apiRoutes'

export const getLegends = async () => {
  try {
    const response = await fetch(API_ROUTES.LEGENDS.GET_ALL)
    const data = await response.json()

    if (!response.ok) {
      throw new Error('Error al traer las leyendas')
    }

    return {
      error: false,
      data
    }
  } catch (error) {
    console.error('Error al traer las leyendas', error)

    return {
      error: true,
      message: "Error al traer las leyendas"
    }
  }
}