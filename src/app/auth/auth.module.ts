import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {Routes, RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'

import {PersistanceService} from './../shared/services/rersistance.service'
import {BackendErrorMessagesModule} from './../shared/modules/backendErrorMessages/backendErrorMessages.module'
import {RegisterEffect} from './store/effects/register.effects'
import {AuthService} from './services/auth.service'
import {RegisterComponent} from './components/register/register.component'
import {reducers} from './store/reducers'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
