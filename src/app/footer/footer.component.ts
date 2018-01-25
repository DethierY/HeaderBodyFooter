import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  listTitlesFooter =  ['Legal notices', 'Credits'];

  constructor(public appService: AppService) { }

  ngOnInit() {
  }

  selectMenu(title) {
    this.appService.selectedMenu = title;
    console.log(this.appService.selectedMenu);
  }

  changeColor(title): string {
    if (title === this.appService.selectedMenu) {
      return 'red';
    } else {
      return 'black';
    }
  }
}
