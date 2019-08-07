import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes =[
	{ path: '', component: ShowComponent },
	{ path: 'show', component: ShowComponent }
]

@NgModule({
  declarations: [ShowComponent],
  imports: [
	CommonModule,
	RouterModule.forChild(routes),
	FormsModule,
	Ng2SearchPipeModule 
  ]
})
export class ShowModule { }
