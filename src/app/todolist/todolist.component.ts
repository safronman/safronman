import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITodo} from '../home/home.component';

export interface ITask {
    description: string;
    title: string;
    completed: boolean;
    status: number;
    priority: number;
    startDate: string;
    deadline: string;
    id: string;
    todoListId: string;
    order: number;
    addedDate: string;
}

export interface IChangeTodoTitle {
    todolistTitle: string;
    todolistId: string;
}

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

    @Input() todolist: ITodo;
    @Output() deleteTodo = new EventEmitter<string>();
    @Output() changeTodoTitle = new EventEmitter<IChangeTodoTitle>();

    tasks: Array<ITask> = [];
    editTitleMode = false;

    constructor() {
    }

    ngOnInit() {
        this.tasks = [
            {
                description: 'task description 1',
                title: 'task title 1',
                completed: false,
                status: 0,
                priority: 0,
                startDate: new Date().toString(),
                deadline: new Date().toString(),
                id: '1',
                todoListId: '1',
                order: 1,
                addedDate: new Date().toString(),
            },
            {
                description: 'task description 2',
                title: 'task title 2',
                completed: true,
                status: 0,
                priority: 0,
                startDate: new Date().toString(),
                deadline: new Date().toString(),
                id: '2',
                todoListId: '1',
                order: 1,
                addedDate: new Date().toString(),
            }
        ];
    }

    onDeleteTodolistClick(todolistId) {
        this.deleteTodo.emit(todolistId);
    }

    changeTitle() {
        this.editTitleMode = true;
    }

    onBlurTodolistTitle(todolistId) {
        this.changeTodoTitle.emit({ todolistTitle: this.todolist.title, todolistId});
        this.editTitleMode = false;
    }
}
