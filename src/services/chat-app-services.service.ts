import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatAppServicesService {

//   private baseUrl = 'http://localhost:3000';

//   constructor(private http: HttpClient) { }

//   fetchData(): Observable<any[]> {
// console.log("${this.baseUrl} >>>>>>>> ", `${this.baseUrl}/api/chats`);
//     return this.http.get<any[]>(`${this.baseUrl}/api/chats`);
//   }

//   getChats(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.baseUrl}/chats`);
//   }

//   addChat(chat: any): Observable<any> {
//     return this.http.post<any>(`${this.baseUrl}/chats`, chat);
//   }

//   deleteChat(id: number): Observable<any> {
//     return this.http.delete<any>(`${this.baseUrl}/chats/${id}`);
//   }
}
