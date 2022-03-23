import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private appUrl = environment.appUrl;
  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.appUrl}/users`);
  }


  getTextFile(): Observable<string> {
    return this.http.get(`assets/file.txt`, { responseType: 'text' });
  }

  getUsersEvents(): Observable<HttpEvent<User[]>> {
    return this.http.get<User[]>(`${this.appUrl}/users`, { observe: 'events' });
  }
  getUser(): Observable<User> {
    return this.http.get<User>(`${this.appUrl}/users/1`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.appUrl}/users`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.appUrl}/users/${user.id}`, user);
  }

  patchUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.appUrl}/users/${user.id}`, user);
  }

  deleteUser(user: User): Observable<unknown> {
    return this.http.delete<unknown>(`${this.appUrl}/users/${user.id}`);
  }
}
