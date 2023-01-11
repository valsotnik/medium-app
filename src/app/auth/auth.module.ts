import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    RegisterComponent
  ],
})
export class AuthModule { }
