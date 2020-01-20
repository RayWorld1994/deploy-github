import { ResponseApi } from './../../home/models/response-api.model';
import { EndpointsService } from './../../core/services/endpoints.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuthentication } from '../models/user-authentication.model';
import { Observable } from 'rxjs';
import { TokenUser } from '../models/token-user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private endpoints: EndpointsService) {}

  login(user: UserAuthentication): Observable<TokenUser> {
    return this.http
      .post<ResponseApi<TokenUser>>(this.endpoints.store.login(), {
        data: user,
      })
      .pipe(map((respose) => respose.data));
  }
}
