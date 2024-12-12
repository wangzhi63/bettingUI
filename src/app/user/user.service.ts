import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';



@Injectable({
    providedIn: 'root'
})
export class UserService {

    private apiUrl = '/api/users';

    constructor(private http: HttpClient) { }

    saveUser(user: User): Observable<User> {
        return this.http.post<User>(this.apiUrl, user);
    }
}