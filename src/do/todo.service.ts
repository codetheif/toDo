import { Injectable } from '@angular/core';

@Injectable()
export class ToDoService {
  getTaskList(){
      var tasks=["Talk to sudeep","Get dishes done"," Wash Clothes "];
      var status =['Y','N','N'];
      var tasksList=[];

      for(var i=0;i<tasks.length;i++){
          tasksList.push({
              "name":tasks[i],
              "status":status[i]
          })
      }

      console.log(tasksList);
      return tasksList;
  }
}