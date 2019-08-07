import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesComponent } from './resources.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
	{ path: 'resources', component: ResourcesComponent }
]

@NgModule({
  declarations: [ResourcesComponent],
  imports: [
	CommonModule,
	RouterModule.forChild(routes)
  ]
})
export class ResourcesModule { }
