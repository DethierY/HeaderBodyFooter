import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  urlListFooter = [
    { name: 'Legal notices', url: '/legal'},
    { name: 'Credits', url: '/credits'}
  ];

  constructor(public appService: AppService) { }

  ngOnInit() {
  }

  selectMenu(title): void {
    this.appService.selectedMenu = title;
  }

  navChoice(title): string {
    const choixMenu: string = this.urlListFooter.find(function(urlListItem) {
      return urlListItem.name === title; }).name;
      return choixMenu;
  }

  changeColor(title): string {
    if (title === this.appService.selectedMenu) {
      return 'red';
    } else {
      return 'black';
    }
  }

  routing(title, urlList): string {
    const choix = this.navChoice(title);
    const route: string = this.urlListFooter.find(function(urlListItem) {
      return urlListItem.name === choix; }).url;
    return route;
  }

}
