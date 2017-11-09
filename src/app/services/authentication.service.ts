//import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable()
export class AuthenticationService {

    constructor(private httpClientService: HttpClientService) { }

    private signInUrl = "http://freevote-002-site1.btempurl.com/authentication/signin/";

    SignIn(website: string, email: string, password: string): Observable<any> {

        // this.httpClient
        //     .get(this.testUrl)
        //     .map(response => response.json())
        //     .subscribe(
        //     successResponse => { console.log('TEST success ' + successResponse.Value); },
        //     errorResponse => { 'TEST error: ' + errorResponse }
        //     );


        // this.httpClient
        //     .post(this.AnyOldUrl, {})
        //     .map(response => response.json())
        //     .subscribe(
        //     response => { console.log("ANY OLD Success " + response) },
        //     error => { console.log("ANY OLD Error " + error) }
        //     );

        debugger;
        
        let data = { "website": website, "email": email, "password": password };

        return this.httpClientService
            .post(this.signInUrl, data)
            //.map(response => response.json()); //assumed - not needed

            // .subscribe(
            // response => { console.log("SIGN-IN-NEW Success " + response.Value) },
            // error => { console.log("SIGN-IN-NEW ERROR " + error) }
            // );

    }

}

export class SignInData {
    public SignInResult: number;
    public AttemptsRemaining: number;
    public email: string;
    public VoterID: number;
    public SessionID: number;
    public roles: string[];
    public JWT: string;
}