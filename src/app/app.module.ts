import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebHeaderComponent } from './web-header/web-header.component';
import { FooterComponent } from './footer/footer.component';
import { DualListComponent } from './dual-list/dual-list.component';
import { AddRemoveButtonComponent } from './add-remove-button/add-remove-button.component';
import { SaveListComponent } from './save-list/save-list.component';
import { DndListModule } from 'ngx-drag-and-drop-lists';



@NgModule({
  declarations: [
    AppComponent,
    WebHeaderComponent,
    FooterComponent,
    DualListComponent,
    AddRemoveButtonComponent,
    SaveListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DndListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
