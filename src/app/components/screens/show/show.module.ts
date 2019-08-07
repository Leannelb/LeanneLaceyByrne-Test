import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
	{ path: 'show', component: ShowComponent }
]

@NgModule({
  declarations: [ShowComponent],
  imports: [
	CommonModule,
	RouterModule.forChild(routes)
  ]
})
export class ShowModule { }
