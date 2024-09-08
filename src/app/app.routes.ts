import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'todos', component: TodoListComponent },
    { path: 'add-todo', component: AddTodoComponent },
    { path: 'edit-todo/:id', component: EditTodoComponent },
    { path: 'register', component: RegisterComponent },
  ];