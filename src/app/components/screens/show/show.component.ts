import { Component, OnInit } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
	 searchText: any;
	 userForm: FormGroup;

	constructor( private fb: FormBuilder) { }

	ngOnInit() {
		this.initForm();
	}
	initForm() {
		this.userForm = this.fb.group({
			name: new FormControl(''),
			description: new FormControl(''),
			catagory: new FormControl(''),
			subCatagory: new FormControl(''),
			esd: new FormControl(''),
			email: new FormControl('')
		});
	}

	onSubmit(){

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

