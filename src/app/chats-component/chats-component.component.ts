import { Component, OnInit } from '@angular/core';
import { ChatAppServicesService } from '../../services/chat-app-services.service';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import axios, { AxiosResponse } from 'axios';

@Component({
  selector: 'app-chats-component',
  templateUrl: './chats-component.component.html',
  styleUrls: ['./chats-component.component.css']
})
export class ChatsComponentComponent implements OnInit {

  chats: any;
  private baseUrl = 'http://localhost:3000';

  constructor(
    private chatAppServicesService: ChatAppServicesService,
    private router: Router) { }

  chatList() {
    this.router.navigate(['/chatList']);
  }

  async ngOnInit(): Promise<void> {
    await this.getChats();
    console.log("chats >>>>>> ", this.chats);
  }

  async getChats(): Promise<any> {
    const response: AxiosResponse = await axios.get(`${this.baseUrl}/api/chats`);
    this.chats = JSON.parse(response.data);
  }

  // addChat(name: string): void {
  //   if (!name.trim()) { return; }
  //   this.chatAppServicesService.addChat({ name } as any)
  //     .subscribe(item => {
  //       this.chats.push(item);
  //     });
  // }

  // deleteItem(id: number): void {
  //   this.chatAppServicesService.deleteChat(id)
  //     .subscribe(() => {
  //       this.chats = this.chats.filter(chats => chats.id !== id);
  //     });
  // }
}
