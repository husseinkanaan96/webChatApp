import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ChatAppServicesService } from '../services/chat-app-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  fetchedData: any[];

  constructor(private ChatAppServicesService: ChatAppServicesService) { }

  ngOnInit(): void {


    console.log("5555555555555555");

    this.ChatAppServicesService.fetchData().subscribe(data => {
      this.fetchedData = data;
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.fetchedData);
    });

  }

}
