import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {environment} from './../../../environments/environment'
import {IAuthResponse} from './../types/authResponse.interface'
import {IRegisterRequest} from 'src/app/auth/types/registerRequest.interface'
import {ICurrentUser} from 'src/app/shared/types/currentUser.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = `${environment.apiUrl}/users`

    return this.http
      .post<IAuthResponse>(url, data)
      .pipe(map((response: IAuthResponse) => response.user))
  }
}
