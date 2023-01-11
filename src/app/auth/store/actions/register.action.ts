import {ActionTypes} from '../actionTypes'
import {createAction, props} from '@ngrx/store'

import {ICurrentUser} from './../../../shared/types/currentUser.interface'
import {IRegisterRequest} from '../../types/registerRequest.interface'
import {IBackendErrors} from 'src/app/shared/types/backendErrors.interface'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: IRegisterRequest}>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{currentUser: ICurrentUser}>()
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{errors: IBackendErrors}>()
)
