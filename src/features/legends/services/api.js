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

export const getLegend = async (id) => {
  try {
    const response = await fetch(API_ROUTES.LEGENDS.GET_ONE(id))
    const data = await response.json()

    if (!response.ok) {
      throw new Error(typeof data?.detail === "string" ? data?.detail : "Error al traer la leyenda")
    }

    return {
      error: false,
      data
    }
  } catch (error) {
    console.error('Error al traer la leyenda', error)

    return {
      error: true,
      message: error?.message || "Error al eliminar la leyenda"
    }
  }
}

export const deleteLegend = async (id) => {
  try {
    const response = await fetch(API_ROUTES.LEGENDS.DELETE(id), {
      method: 'DELETE'
    })
    const data = await response.json()

    if (!response.ok) {
      throw new Error(typeof data?.detail === "string" ? data?.detail : "Error al eliminar la leyenda")
    }

    return {
      error: false,
      message: "Leyenda eliminada correctamente"
    }
  } catch (error) {
    console.error(error)

    return {
      error: true,
      message: error?.message || "Error al eliminar la leyenda"
    }
  }
}

export const createLegend = async (legend) => {
  try {
    const response = await fetch(API_ROUTES.LEGENDS.CREATE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(legend)
    })
    const data = await response.json()

    if (!response.ok) {
      throw new Error(typeof data?.detail === "string" ? data?.detail : "Error al crear la leyenda")
    }

    return {
      error: false,
      message: "Leyenda creada correctamente"
    }
  } catch (error) {
    console.error(error)

    return {
      error: true,
      message: error?.message || "Error al crear la leyenda"
    }
  }
}

export const updateLegend = async (id, legend) => {
  try {
    const response = await fetch(API_ROUTES.LEGENDS.UPDATE(id), {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(legend)
    })
    const data = await response.json()

    if (!response.ok) {
      throw new Error(typeof data?.detail === "string" ? data?.detail : "Error al actualizar la leyenda")
    }

    return {
      error: false,
      message: "Leyenda actualizada correctamente"
    }
  } catch (error) {
    console.error(error)

    return {
      error: true,
      message: error?.message || "Error al actualizar la leyenda"
    }
  }
}
