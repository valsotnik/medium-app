import {createReducer, on, Action} from '@ngrx/store'

import {registerAction} from './actions/register.action'
import {IAuthState} from './../types/authState.interface'

const initialState: IAuthState = {
  isSubmitting: false,
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
    })
  )
)

export function reducers(state: IAuthState, action: Action) {
  return authReducer(state, action)
}
