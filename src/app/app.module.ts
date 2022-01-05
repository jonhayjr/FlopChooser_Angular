import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {MessageDisplayComponent} from '../message-display/message-display.component';
import {MovieTileComponent} from '../movie-tile/movie-tile.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MessageDisplayComponent, MovieTileComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
