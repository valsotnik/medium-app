export interface IRegisterRequest {
  user: IRegisterData
}

export interface IRegisterData {
  name: string
  email: string
  password: string
}
