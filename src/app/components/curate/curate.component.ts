import { Component, OnInit } from '@angular/core'
import { Http, Response } from '@angular/http' //For HTTP Requests
import 'rxjs/add/operator/map' //Handling Received Data
import { CurateService } from '../../services/curate.service'
//Models
import { Zones } from '../../models/zones'
import { Sources } from '../../models/sources'
import { Tables } from '../../models/tables'
import { Columns } from '../../models/columns'

import { ApiService } from '../../services/api.service'

import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-curate',
  templateUrl: './curate.component.html',
  styleUrls: ['./curate.component.sass'],
  providers: [ApiService, CurateService]
})
export class CurateComponent implements OnInit {
  title = `Curate`
  fingerprintDataAcquired:boolean = false
  showProgressSpinner: boolean = false
  zones: Zones[] = []

  sources: Sources
  tables: Tables
  columns: Columns

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
  tagCategories: object
  
  //Reactive Forms

  curateForm: FormGroup
  zoneName: FormControl
  sourceName: FormControl
  tableName: FormControl
  columnName: FormControl

  

  constructor(private curateService: CurateService, private api: ApiService, public formBuilder: FormBuilder) {

  }

  public ngOnInit() {
    
    this.MIOCategories = [
      "MIO-INTERNAL_USE",
      "MIO-PUBLIC",
      "MIO-RESTRICTED_AND_CONFIDENTIAL",
      "MIO-OTHER_CONFIDENTIAL"
    ]
    this.SECCategories = [
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
      "DOM-BROKER",
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

    if(!Array.isArray(obj)){
      return [obj]
    }
    else {
      return obj
    }

    
  }

  //to get all zones on initialize of component
  getZones(){
    this.curateService
    .getAllZones()
    .subscribe(
    (zones) => {
      this.zones = zones
    }
    )
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

  createFormControls(){
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

    this.curateService
      .selectZone(this.selectedZone)
      .subscribe(
      (sources) => {
        this.sources = sources
        console.log(sources)
        console.log(typeof (sources))
        let x: string[] = Object.values(sources)
        console.log(x)
        for (let i = 0; i < x.length; i++) {
          this.sourceNames[i] = x[i]
        }
      }
      )
  }

  public selectSource(sourceName: string) {
    console.log('Select Source clicked with source name as ' + sourceName)
    this.tableNames = []
    this.selectedSource = sourceName

    this.curateService
      .selectSource(this.selectedSource, this.selectedZone)
      .subscribe(
      (tables) => {
        this.tables = tables
        console.log(tables)
        console.log(typeof (tables))
        let x: string[] = Object.values(tables)
        console.log(x)
        for (let i = 0; i < x.length; i++) {
          this.tableNames[i] = x[i]
        }
      }
      )
  }

  public selectTable(tableName: string) {
    console.log('Select Table clicked with table name as ' + tableName + ' & source name as ' + this.selectedSource + ' & zone name as ' + this.selectedZone)
    this.columnNames = []
    this.selectedTable = tableName

    this.curateService
      .selectTable(this.selectedTable, this.selectedSource, this.selectedZone)
      .subscribe(
      (columns) => {
        this.columns = columns
        console.log(columns)
        console.log(typeof (columns))
        let x: string[] = Object.values(columns)
        console.log(x)
        for (let i = 0; i < x.length; i++) {
          this.columnNames[i] = x[i]
        }
      }
      )
  }


  public selectColumn(columnName) {
    this.selectedColumns = columnName

    this.tagTypes = ['MIO','SEC','DOM']
    this.columnSelected = true

    
  }

  selectTag(tagType, index){
    this.tagID = tagType
    console.log(`TAG TYPE IS ${this.tagID}`);
    switch(this.tagID)  {
      case 'MIO' :{
        this.tagCategories[index] = this.MIOCategories
        break
      }
      case 'SEC' :{
        this.tagCategories[index] = this.SECCategories
        break
      }
      case 'DOM' :{
        this.tagCategories[index] = this.DOMCategories
        break
      }
    }

  }
  selectTagCategory(tagCategory){
    
    console.log(`TAG CATEGORY IS ${tagCategory}`);
  }


  reset() {
    this.fingerprintData = {}
    this.fingerprintDataAcquired = false
  }

}
