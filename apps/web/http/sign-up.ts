import { api } from './api-clint'

interface SignUpRequest {
  name: string
  email: string
  password: string
}
export async function signUp({
  name,
  email,
  password,
}: SignUpRequest): Promise<void> {
  await api.post('users', {
    json: {
      name,
      email,
      password,
    },
  })
}
