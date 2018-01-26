import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  urlList = [
    {name: 'Home', url: '/'},
    {name: 'Skills', url: '/skills'},
    {name: 'Experience', url: '/experience'},
    {name: 'Contact', url: '/contact'},
    {name: 'Todo', url: '/todo'}
  ];
  
  selectedMenu = 'Home';

  constructor(public appService: AppService) { }

  ngOnInit() {
  }

  selectMenu(title): void {
    this.selectedMenu = title;
  }


  navChoice(title): string {
    const choixMenu: string = this.urlList.find(function(urlListItem) {
      return urlListItem.name === title; }).name;
      return choixMenu;
  }

  changeColor(title): string {
    if (title === this.selectedMenu) {
      return 'red';
    } else {
      return 'black';
    }
  }

  routing(title, urlList): string {
    const choix = this.navChoice(title);
    const route: string = this.urlList.find(function(urlListItem) {
      return urlListItem.name === choix; }).url;
    return route;
  }

}
