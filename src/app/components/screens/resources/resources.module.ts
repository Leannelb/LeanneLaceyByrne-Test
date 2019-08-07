import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesComponent } from './resources.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes =[
	{ path: 'resources', component: ResourcesComponent }
]

@NgModule({
  declarations: [ResourcesComponent],
  imports: [
	CommonModule,
	RouterModule.forChild(routes),
	// BrowserAnimationsModule
  ]
})
export class ResourcesModule { }
