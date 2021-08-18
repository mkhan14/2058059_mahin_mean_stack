import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  todoRef = new FormGroup({
    id:new FormControl("",[Validators.required]),
    name:new FormControl("",[Validators.required]),
    task:new FormControl("",[Validators.required]),
    deadline:new FormControl("",[Validators.required])
  })

  tasks:Array<Task>=new Array();

  constructor() { }

  ngOnInit(): void {
  }

  saveTaskDetails(id:any,name:any,task:any,deadline:any){
    let taskDet=new Task(id,name,task,deadline);
    this.tasks.push(taskDet);
    this.todoRef.reset();
  }

}
