import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AddComponent} from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { TodoComponent } from './todo/todo.component';
import { LegalComponent } from './legal/legal.component';
import { CreditsComponent } from './credits/credits.component';

import { AppRoutingModule } from './/app-routing.module';
import { AppMaterialModule } from './/app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    HomeComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
    TodoComponent,
    LegalComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
