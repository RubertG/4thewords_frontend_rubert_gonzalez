import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string(),
})

const parsedEnv = envSchema.safeParse(import.meta.env)

if (!parsedEnv.success) {
  console.error('❌ Variables de entorno inválidas:', parsedEnv.error.format())
  throw new Error('❌ Variables de entorno inválidas')
}

export const env = parsedEnv.data