import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', loadChildren: './components/screens/tabs/tabs.module#TabsModule'},
	{ path: '', loadChildren: './components/screens/show/show.module#ShowModule'},
	{ path: '', loadChildren: './components/screens/resources/resources.module#ResourcesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
