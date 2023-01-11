import {IBackendErrors} from './../../shared/types/backendErrors.interface'
import {ICurrentUser} from './../../shared/types/currentUser.interface'

export interface IAuthState {
  isSubmitting: boolean
  currentUser: ICurrentUser | null
  isLoggedIn: boolean | null
  validationErrors: IBackendErrors | null
}
