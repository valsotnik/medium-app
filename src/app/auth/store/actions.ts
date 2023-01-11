import {ActionTypes} from './actionTypes'
import {createAction, props} from '@ngrx/store'

import {IRegisterRequest} from '../types/registerRequest.interface'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: IRegisterRequest}>()
)
