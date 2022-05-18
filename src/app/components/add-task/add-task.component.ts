import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
    .onToggleAdd().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Basic form checking
    if (!this.text) {
      alert('Please add a task');
      return;
    } else if (!this.day) {
      alert('Please add a day and time');
      return;
    }

    // Create new task
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    // Emit
    this.onAddTask.emit(newTask);

    // Clear form
    this.text = "";
    this.day = "";
    this.reminder = false; 
  }
}
