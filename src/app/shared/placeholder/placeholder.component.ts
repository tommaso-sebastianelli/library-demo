import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-placeholder',
	templateUrl: './placeholder.component.html',
	styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent implements OnInit {
	@Input() icon: string;
	@Input() iconAlt: string;
	@Input() title: string;
	@Input() subtitle: string;
	constructor() { }

	ngOnInit() {
	}

}
