export enum Role {
  Admin,
  Inversor,
  Beneficiary,
  Sealer,
  Partner,
  Guest
}

export type User = {
  id?: string
  firstName: string
  lastName: string
  country: string
  email: string
  prefix: number
  phone: number
  role: Role
  isDeleted?: boolean
}
