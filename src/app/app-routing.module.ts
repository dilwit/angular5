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
		path: 'contactUs',
		component: ContactUsComponent,
		data: {
			param1: 'default1',
			param2: 'default2'
		}
	},
	{
		path: 'contactUs/:urlParam1/:urlParam2',
		component: ContactUsComponent,
		data: {
			param1: 'default1',
			param2: 'default2'
		}
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
