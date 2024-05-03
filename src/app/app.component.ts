import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ChatAppServicesService } from '../services/chat-app-services.service';
import { ChatsComponentComponent } from './chats-component/chats-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  fetchedData: any[];

  constructor(private ChatAppServicesService: ChatAppServicesService,
              private chatsComponentComponent: ChatsComponentComponent 
  ) { }

  ngOnInit(): void {


    // console.log("5555555555555555");

    // this.chatsComponentComponent.fetchData().subscribe(arrayOfUsers => {
    //   this.fetchedData = arrayOfUsers;
    //   console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.fetchedData);
    // });

  }

}
