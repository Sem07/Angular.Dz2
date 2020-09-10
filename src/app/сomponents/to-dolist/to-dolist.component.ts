import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-dolist',
  templateUrl: './to-dolist.component.html',
  styleUrls: ['./to-dolist.component.css']
})
export class ToDolistComponent implements OnInit {

 actions = [];
  constructor(private userService: UserService) {
    this.userService.getTodolist().subscribe((toDolist) => {
      console.log(toDolist);
       this.actions = toDolist

  ngOnInit(): void {
  }

}
