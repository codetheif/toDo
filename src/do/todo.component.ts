import { Component,OnInit ,Input , Output} from '@angular/core';
import {ToDoService} from './todo.service';
import { FormsModule } from '@angular/forms';
import '../assets/css/Styles.scss';
@Component({
  selector: 'to-do',
  templateUrl: './todo.component.html',
  styleUrls: ['../assets/css/Styles.scss']
})
export class ToDoComponent {

taskList:any;
addedTasks:any;
@Input() taskName:string='';

constructor( private toDo: ToDoService){}

 ngOnInit(){
   this.taskList = this.toDo.getTaskList();
   this.addedTasks=[];
 }

addTask(){
  console.log('Adding '+this.taskName);
  this.taskList.push({
    'name':this.taskName,
    'status':'N'
  });
  this.taskName='';
}

clearTask(Task:any){
  console.log(' Printing In clear Task ');
  console.log(Task);
}
 

}

