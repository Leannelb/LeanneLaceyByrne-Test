import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
	selector: 'app-resources',
	templateUrl: './resources.component.html',
	styleUrls: ['./resources.component.css'],
	animations: [
		trigger('navigation', [
			state('true', style({ left: '-20%' })),
			state('false', style({ left: '0%' })),
			transition('0 => 1', animate('.2s')),
			transition('1 => 0', animate('.2s'))
		]),
	]
})

export class ResourcesComponent implements OnInit {
	navbarOpen = true;
	ngOnInit() { }

	navigation: boolean = true;
	showOverlay: boolean = false;
	navigationDrawer() {
		this.navigation = !this.navigation;
	}
}
