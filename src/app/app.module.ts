import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToDoComponent } from '../do/todo.component';
import {ToDoService} from '../do/todo.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,FormsModule
  ],
  declarations: [
    AppComponent,ToDoComponent
  ],
providers:[ ToDoService],

  bootstrap: [ AppComponent ]
})
export class AppModule { }

