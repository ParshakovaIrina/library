import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
@Injectable()
export class RestService {
  constructor(private httpClient: HttpClient) {
  }

  get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
}
