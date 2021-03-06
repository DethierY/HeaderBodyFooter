import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public appService: AppService) { }
  
  listTitlesHeader =  ['Home', 'Skills', 'Experience', 'Contact', 'Todo'];

  ngOnInit() {
  }

  selectMenu(title) {
    this.appService.selectedMenu = title;
  }

  changeColor(title): string {
    if (title === this.appService.selectedMenu) {
      return 'red';
    } else {
      return 'black';
    }
  }
}
