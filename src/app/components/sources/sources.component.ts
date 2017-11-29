import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';


//DialogBox
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfigureSourceComponent } from '../configure-source/configure-source.component'


@Component({
	selector: 'app-sources',
	templateUrl: './sources.component.html',
	styleUrls: ['./sources.component.sass']
})
export class SourcesComponent implements OnInit {

	sourcesForm: FormGroup




	options = [
		{ value: "hdfs", viewValue: "HDFS" },
		{ value: "hive", viewValue: "HIVE" },
		{ value: "aws-s3", viewValue: "AWS S3" },
		{ value: "mysql", viewValue: "MySQL" },
		{ value: "file", viewValue: "FILE" },
		{ value: "jdbc", viewValue: "JDBC" }
	]



	constructor(public dialog: MatDialog, public formBuilder: FormBuilder) {
	}

	ngOnInit() {

		this.createForm()

	}
	createForm() {

		this.sourcesForm = new FormGroup({
			sourceWrapper: this.formBuilder.array([
				this.initSource()
			]),
			
		})
		
		

	}


	initSource() {
		return this.formBuilder.group({
			sourceName: ['', Validators.required],
			sourceType: ['', Validators.required]
		})
	}

	addSource() {

		const source = <FormArray>this.sourcesForm.controls['sourceWrapper']
		source.push(this.initSource())

	}

	removeSource(i) {
		const source = <FormArray>this.sourcesForm.controls['sourceWrapper']
		source.removeAt(i)
	}


	public openDialog(i): void {
		let sendOP = this.sourcesForm.value

		let tempSources = Object.values(sendOP.sourceWrapper)
		console.log(tempSources);
		let sourceNames = tempSources[i].sourceName
		let sourceTypes = tempSources[i].sourceType

		

		let dialogRef = this.dialog.open(ConfigureSourceComponent, {
			width: '400px',
			data: { sourceName: sourceNames, sourceType: sourceTypes }
		})

		dialogRef.afterClosed().subscribe(result => {
			console.log('The Configure Source Dialog was closed')
		})
	}



}