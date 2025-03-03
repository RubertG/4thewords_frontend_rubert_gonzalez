import { env } from "../libs/env";

export const API_ROUTES = {
  LEGENDS: {
    GET_ALL: `${env.VITE_API_URL}/leyendas`,
    GET_ONE: (id) => `${env.VITE_API_URL}/leyendas/${id}`,
    CREATE: `${env.VITE_API_URL}/leyendas`,
    UPDATE: (id) => `${env.VITE_API_URL}/leyendas/${id}`,
    DELETE: (id) => `${env.VITE_API_URL}/leyendas/${id}`,
  },
}