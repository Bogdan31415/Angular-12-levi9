export interface Address {
  city: string,
  street: string
}

interface Company {
  name: string,
  catchPhrase: string,
  bs: string
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  address: Address,
  company: Company,
  isActive: boolean
}
