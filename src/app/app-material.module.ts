import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [FlexLayoutModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule
  ],
  declarations: []
})
export class AppMaterialModule {}
