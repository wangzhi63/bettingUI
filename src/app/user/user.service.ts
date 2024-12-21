import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { UserInfo } from './user-info.model';



@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userInfoSubject = new BehaviorSubject<UserInfo | null>(null);
    userInfo$ = this.userInfoSubject.asObservable();

    private apiUrl = '/api/users';

    constructor(private http: HttpClient) { }

    saveUser(user: User): Observable<User> {
        return this.http.post<User>(this.apiUrl, user);
    }

    fetchUserInfo(userId: number): Observable<UserInfo> {
        return this.http.get<UserInfo>(`${this.apiUrl}/${userId}`);
    }

    setUserInfo(userInfo: UserInfo): void {
        this.userInfoSubject.next(userInfo);
    }
}