import {ICurrentUser} from './../../../shared/types/currentUser.interface'
import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {isSubmittingSelector} from './../../store/selectors'
import {registerAction} from '../../store/actions/register.action'
import {IRegisterRequest} from '../../types/registerRequest.interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form: FormGroup
  public isSubmitting$: Observable<boolean>

  constructor(private fb: FormBuilder, private store: Store) {}

  public ngOnInit(): void {
    this.initializeFrom()
    this.initializeValues()
  }

  public initializeFrom(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  public onSubmit(): void {
    const request: IRegisterRequest = {
      user: this.form.value,
    }
    this.store.dispatch(registerAction({request}))
  }

  public initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  }
}
