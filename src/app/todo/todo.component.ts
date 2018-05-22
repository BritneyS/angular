import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers : [TodoService]
})
export class TodoComponent implements OnInit {
  toDoListArray: any[];

  constructor(private toDoService: TodoService) { }

  ngOnInit() {
    this.toDoService.getToDoList().snapshotChanges()
    .subscribe(item => {
      this.toDoListArray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.toDoListArray.push(x);
      })

      //sort array isChecked false -> true
      this.toDoListArray.sort((a,b) => {
        return a.isChecked - b.isChecked;
      })

    });
  }

  onAdd(itemTitle) {
    this.toDoService.addTitle(itemTitle.value);
    itemTitle.value = null; //TODO: add condition to check for inserting of null values
    //TODO: add check for script and SQL injections
  }

  alterCheck($key: string,isChecked) {
    this.toDoService.checkOrUnCheckTitle($key,!isChecked);
  }

  onDelete($key: string){
    this.toDoService.removeTitle($key);
  }

}
