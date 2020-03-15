import {Observable} from "rxjs";
import {RestService} from "../services/rest.service";
import {UpdateBookRequest} from "../interfaces/UpdateBookRequest";
import {Book} from "../interfaces/book";
import {MyUser} from "../interfaces/MyUser";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class LoginService {
  private baseUrl = "http://localhost:8080";
  constructor(private restService: RestService) { }

  login(value: MyUser): Observable<MyUser> {
    return this.restService.post(`${this.baseUrl}/login`, value);
  }
  register(value: MyUser): Observable<boolean> {
    return this.restService.post(`${this.baseUrl}/registration`, value);
  }
}
