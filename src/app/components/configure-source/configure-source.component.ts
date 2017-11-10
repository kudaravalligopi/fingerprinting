import { Component, OnInit, Inject } from '@angular/core';

//DialogBox
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';



@Component({
	selector: 'app-configure-source',
	templateUrl: './configure-source.component.html',
	styleUrls: ['./configure-source.component.sass']
})
export class ConfigureSourceComponent implements OnInit {

	sourceName: string
	sourceType: string

	constructor(
		public dialogRef: MdDialogRef<ConfigureSourceComponent>,
		@Inject(MD_DIALOG_DATA) public data: any
	) {

	}

	ngOnInit() {
		console.log('Source Name in Dialog ' + this.data.sourceName)
		console.log('Source Name in Dialog ' + this.data.sourceType)

		this.sourceName = this.data.sourceName
		this.sourceType = this.data.sourceType
	}

	onNoClick(): void {

		this.dialogRef.close()
	}
}
