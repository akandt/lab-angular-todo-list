import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
import { i18nMetaToDocStmt } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

interface Todo {
  task: string,
  completed: boolean
}

@Component({
  selector: 'todo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'to-do-list';

  listItems: Todo[] = [
    {
      task: 'fold clothes',
      completed: false
    },
    {
      task: 'relax',
      completed: false
    },
    {
      task: 'try to pet cat',
      completed: true
    },
    {
      task: 'pet dog',
      completed: false
    },
  ];

}