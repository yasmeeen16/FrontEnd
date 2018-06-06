import { Component } from '@angular/core';
import * as $ from 'jquery';
import {DataServicesService} from '../../services/data-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allstore: any[];
  search = false;
  constructor(public  dataService: DataServicesService) {
    this.getallStore();

  }
   title = 'app';

  getallStore() {
    this.dataService.getStore().subscribe(allstore => {
      this.allstore = allstore;

      console.log(this.allstore);

    }, err => {
    });

  }

}
