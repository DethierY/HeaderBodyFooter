import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'todo', component: TodoComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
