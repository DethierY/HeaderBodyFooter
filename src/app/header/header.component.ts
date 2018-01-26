import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public appService: AppService) { }

  urlList = [
    {name: 'Home', url: '/'},
    {name: 'Skills', url: '/skills'},
    {name: 'Experience', url: '/experience'},
    {name: 'Contact', url: '/contact'},
    {name: 'Todo', url: '/todo'}
  ];
  
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

  routing(title, urlList): string {
    const route: string = this.urlList.find(function(urlListItem) {
      return urlListItem.name === title; }).url;
    console.log(route);
    return route;
  }
}
