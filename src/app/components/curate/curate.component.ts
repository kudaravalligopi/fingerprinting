import { Component, OnInit } from '@angular/core'
import { Http, Response } from '@angular/http' //For HTTP Requests
import 'rxjs/add/operator/map' //Handling Received Data

import { ApiService } from '../../services/api.service'

import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-curate',
  templateUrl: './curate.component.html',
  styleUrls: ['./curate.component.sass'],
  providers: [ApiService]
})
export class CurateComponent implements OnInit {
  title = `Curate`
  fingerprintDataAcquired: boolean = false
  showProgressSpinner: boolean = false
  zones: string[] = []

  sources: any
  tables: any
  columns: any

  sourceNames: string[] = []
  tableNames: string[] = []
  columnNames: string[] = []


  selectedZone: string
  selectedSource: string
  selectedTable: string
  selectedColumns: string
  columnSelected: boolean = false

  tags: any

  tagID: string

  MIOCategories: any[]
  SECCategories: any[]
  DOMCategories: any[]

  tagTypes: string[]
  tagCategories: any[] = []

  //Reactive Forms

  curateForm: FormGroup
  zoneName: FormControl
  sourceName: FormControl
  tableName: FormControl
  columnName: FormControl



  constructor(private api: ApiService, public formBuilder: FormBuilder) {

  }

  public ngOnInit() {

    this.MIOCategories = [
      "DISABLED_CORRECTION",
      "MIO-INTERNAL_USE",
      "MIO-PUBLIC",
      "MIO-RESTRICTED_AND_CONFIDENTIAL",
      "MIO-OTHER_CONFIDENTIAL"
    ]
    this.SECCategories = [
      "DISABLED_CORRECTION",
      "SEC-AGE",
      "SEC-DATE_OF_BIRTH",
      "SEC-DATE_OF_DEATH",
      "SEC-SSN",
      "SEC-NOTES",
      "SEC-ACCOUNT_NUMBER",
      "SEC-CLAIM_DATE",
      "SEC-EMAIL",
      "SEC-PASSWORD",
      "SEC-FULL_NAME",
      "SEC-COMMISSIONS",
      "SEC-TIN",
      "SEC-LAST_NAME",
      "SEC-ACCT_NUM",
      "SEC-MIDDLE_NAME",
      "SEC-LOGIN",
      "SEC-PHI"
    ]
    this.DOMCategories = [
      "DISABLED_CORRECTION",
      "DOM-BILLING",
      "DOM-CLAIMS",
      "DOM-CUSTOMER",
      "DOM-GEOGRAPHIC_AREA",
      "DOM-COMMUNICATION"
    ]
    this.getZones()
    this.createFormControls()
    this.createForm()

  }



  makeArray(obj) {

    if (!Array.isArray(obj)) {
      return [obj]
    }
    else {
      return obj
    }


  }

  //to get all zones on initialize of component
  getZones() {
    this.zones = this.api.getZones()
      
  }

  createForm() {
    this.curateForm = new FormGroup({
      zoneName: this.zoneName,
      sourceName: this.sourceName,
      tableName: this.tableName,
      columnName: this.columnName,
      tagInfo: this.formBuilder.array([
        this.initTagInfo()
      ])
    })
  }

  createFormControls() {
    this.zoneName = new FormControl('', Validators.required)
    this.sourceName = new FormControl('', Validators.required)
    this.tableName = new FormControl('', Validators.required)
    this.columnName = new FormControl('', Validators.required)
  }

  //Adding and removing new tags
  initTagInfo() {
    return this.formBuilder.group({
      tagType: ['', Validators.required],
      tagCategory: ['', Validators.required]
    })
  }

  addNewTag() {
    const tagInfo = <FormArray>this.curateForm.controls['tagInfo']
    tagInfo.push(this.initTagInfo())
  }

  removeTag(i: number) {
    const tagInfo = <FormArray>this.curateForm.controls['tagInfo']
    tagInfo.removeAt(i)
  }




  public selectZone(zoneName: string) {
    this.sourceNames = []
    this.selectedZone = zoneName

    this.api
      .selectZone(this.selectedZone)
      .subscribe(
      (sources) => {
        this.sources = sources
        console.log(sources)
        this.sourceNames = sources["databases"]
        console.log(this.sourceNames)
      }
      )
  }

  public selectSource(sourceName: string) {
    console.log('Select Source clicked with source name as ' + sourceName)
    this.tableNames = []
    this.selectedSource = sourceName

    this.api
      .selectSource(this.selectedSource, this.selectedZone)
      .subscribe(
      (tables) => {
        this.tables = tables
        console.log(tables)
        console.log(typeof (tables))
        this.tableNames = tables["tables"]
        console.log(this.tableNames)
        this.tableNames.sort()
      }
      )
  }

  public selectTable(tableName: string) {
    console.log('Select Table clicked with table name as ' + tableName + ' & source name as ' + this.selectedSource + ' & zone name as ' + this.selectedZone)
    this.columnNames = []
    this.selectedTable = tableName

    this.api
      .selectTable(this.selectedTable, this.selectedSource, this.selectedZone)
      .subscribe(
      (columns) => {
        this.columns = columns
        console.log(columns)
        console.log(typeof (columns))
        this.columnNames = columns["columns"]
        console.log(this.columnNames)
        
        this.columnNames.sort()
      }
      )
  }


  public selectColumn(columnName) {
    this.selectedColumns = columnName

    this.tagTypes = ['MIO', 'SEC', 'DOM']
    this.columnSelected = true


  }

  selectTag(tagType,index) {
    this.tagID = tagType
    console.log(`TAG TYPE IS ${this.tagID}`);


    if(this.tagCategories[index] == null ||this.tagCategories[index] == undefined )
    switch(tagType){
      case 'MIO':{
        this.tagCategories.push(this.MIOCategories)
        break
      }
      case 'SEC':{
        this.tagCategories.push(this.SECCategories)
        break
      }
      case 'DOM':{
        this.tagCategories.push(this.DOMCategories)
        break
      }
    }
    

    console.log(`tag categories are`);
    console.log(this.tagCategories);
    
    
  }
  selectTagCategory(tagCategory) {
    console.log(`TAG CATEGORY IS ${tagCategory}`);
  }


  submitTag() {
    let sendOP = this.curateForm.value
    this.api.submitTagCorrections(sendOP)
  }


  reset() {
    this.fingerprintDataAcquired = false
  }

}
