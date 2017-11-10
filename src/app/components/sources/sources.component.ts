import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

//DialogBox
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { ConfigureSourceComponent } from '../configure-source/configure-source.component'


@Component({
	selector: 'app-sources',
	templateUrl: './sources.component.html',
	styleUrls: ['./sources.component.sass']
})
export class SourcesComponent implements OnInit {

	myControl: FormControl = new FormControl()
	sourceName: string = ''
	sourceType: string = ''
	sourceAdded: boolean = false




	options = [
		{ value: "hdfs", viewValue: "HDFS" },
		{ value: "hive", viewValue: "HIVE" },
		{ value: "aws-s3", viewValue: "AWS S3" },
		{ value: "mysql", viewValue: "MySQL" },
		{ value: "file", viewValue: "FILE" },
		{ value: "jdbc", viewValue: "JDBC" }
	]



	constructor(public dialog: MdDialog) {
	}

	public openDialog(): void {
		let dialogRef = this.dialog.open(ConfigureSourceComponent, {
			width: '400px',
			data: { sourceName: this.sourceName, sourceType: this.sourceType }
		})

		dialogRef.afterClosed().subscribe(result => {
			console.log('The Configure Source Dialog was closed')
		})
	}


	addSource() {
		if (this.sourceName != '' && this.sourceType != '') {
			this.sourceAdded = !this.sourceAdded
		}


	}
	ngOnInit() {

	}




}
