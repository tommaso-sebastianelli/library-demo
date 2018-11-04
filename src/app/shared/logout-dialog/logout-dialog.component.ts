import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SocialUser } from '../../../assets/libs/angularx-social-login-master';
import { AuthService } from '../../../assets/libs/angularx-social-login-master';
import { Router } from '../../../../node_modules/@angular/router';
import { ROUTER_HOMEPAGE } from '../../app.config';

@Component({
	selector: 'app-logout-dialog',
	templateUrl: './logout-dialog.component.html',
	styleUrls: ['./logout-dialog.component.scss']
})
export class LogoutDialogComponent implements OnInit {

	constructor(private authService: AuthService, public dialogRef: MatDialogRef<LogoutDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: SocialUser, private router: Router) { }

	ngOnInit() {
	}

	logout(a: any): void {
		this.authService.revokeAuth().then(() => {
			this.dialogRef.close();
			this.router.navigateByUrl(ROUTER_HOMEPAGE);
		});
	}
}
