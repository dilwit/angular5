import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToDoComponent} from './to-do/to-do.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

const routes: Routes = [
	{
		path: 'todo',
		component: ToDoComponent
	},
	{
		path: 'contactUs/:type',
		component: ContactUsComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
