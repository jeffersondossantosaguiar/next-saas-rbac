import { api } from './api-clint'

interface GetOrganizationsResponse {
  organizations: {
    id: string
    name: string
    slug: string
    avatarUrl: string | null
  }[]
}

export async function getOrganizations() {
  return await api.get('organizations').json<GetOrganizationsResponse>()
}
