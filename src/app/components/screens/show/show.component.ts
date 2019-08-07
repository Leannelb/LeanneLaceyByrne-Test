import { Component, OnInit } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
	 searchText: any;

	constructor() { }

	ngOnInit() {
	}

	searchItems = [
	  { id: 1, name: 'Leanne', location: 'Dublin 15' },
	  { id: 1, name: 'Paul' , location: 'America'},
	  { id: 3, name: 'John' , location: 'Australia'},
	  { id: 4, name: 'Tony' , location: 'Dublin 4' },
	  { id: 5, name: 'Liam' , location: 'Russia'},
	  { id: 6, name: 'Dillon' , location: 'China'},
	  { id: 7, name: 'Caitlin' , location: 'Germany'},
	  { id: 8, name: 'Leo' , location: 'Hong Kong'},
	  { id: 9, name: 'Owen' , location: 'Dublin 2'},
	  { id: 10, name: 'Stephen' , location: 'Alaska'}
	];
  }

