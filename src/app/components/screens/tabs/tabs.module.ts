import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';

const routes: Routes =[
	{ path: 'tabs', component: TabsComponent }
]
@NgModule({
  declarations: [TabsComponent],
  imports: [
	CommonModule,
	RouterModule.forChild(routes)
  ]
})
export class TabsModule { }
