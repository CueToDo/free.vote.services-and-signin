import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class HttpClientService {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json');
    headers.append('SignInToken', Cookie.get('SignInToken').valueOf());
  }

  //:Observable<Response>
  get(url) {
    var headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, { headers: headers });
  }

  post(url, data) {
    var headers = new Headers();
    this.createAuthorizationHeader(headers);
    let options: RequestOptionsArgs = { headers: headers };
    return this.http.post(url, JSON.stringify(data), options);
  }

}


