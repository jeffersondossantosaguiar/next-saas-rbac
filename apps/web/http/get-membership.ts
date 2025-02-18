import { Role } from '@saas/auth'
import { api } from './api-clint'

interface GetMembershipResponse {
  membership: {
    id: string
    role: Role
    organizationId: string
    userId: string
  }
}

export async function getMembership(org: string) {
  return await api
    .get(`organization/${org}/membership`)
    .json<GetMembershipResponse>()
}
