import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { UserModel } from './../model/user.model';
import { RestResponse } from './../model/restResponse.model';

@Injectable()
export class CreateUserService {

  constructor(private http: HttpClient) { }

  public validate(user: UserModel): boolean {
    let isValid = true;

 

    if (!user.firstSurname) {
      isValid = false;
    }
    if (!user.address) {
      isValid = false;
    }
    return isValid;
  }

  public saveOrUpdate(user: UserModel): Observable<RestResponse> {
    return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate",JSON.stringify(user));
  }

}
