import { Component, ViewChild, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-search-dialog',
	templateUrl: './search-dialog.component.html',
	styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent implements OnInit {
	@ViewChild('searchDialogForm') form;
	constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {

	}

}
