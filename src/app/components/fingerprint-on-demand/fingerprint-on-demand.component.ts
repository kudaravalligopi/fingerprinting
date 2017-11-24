
import { Component, OnInit } from '@angular/core'
import { Http, Response } from '@angular/http' //For HTTP Requests
import 'rxjs/add/operator/map' //Handling Received Data
import { FingerprintService } from '../../services/fingerprint.service'
//Models
import { Zones } from '../../models/zones'
import { Sources } from '../../models/sources'
import { Tables } from '../../models/tables'
import { Columns } from '../../models/columns'

import { ApiService } from '../../services/api.service'

import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';



@Component({
  selector: 'app-fingerprint-on-demand',
  templateUrl: './fingerprint-on-demand.component.html',
  styleUrls: ['./fingerprint-on-demand.component.sass']
})
export class FingerprintOnDemandComponent implements OnInit {

  title = `FingerPrint`
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
  selectedMultipleColumns: string[] = []
  fingerprintData: any




  //Reactive Form
  fingerprintOnDemandForm: FormGroup

  zoneName : FormControl
  sourceName : FormControl
  tableName : FormControl
  columnName : FormControl
  fingerprintType: FormControl



  constructor(private fingerprintService: FingerprintService, private api: ApiService) {

  }

  public ngOnInit() {
    
    this.getZones()
    this.createFormControls()
    this.createForm()
    
  }

  //to get all zones on initialize of component
  getZones() {
    this.fingerprintService
    .getAllZones()
    .subscribe(
    (zones) => {
      this.zones = zones
    }
    )
  }

  createFormControls(){
    this.zoneName = new FormControl('', [Validators.required])
    this.sourceName = new FormControl('', [Validators.required])
    this.tableName = new FormControl('', [Validators.required])
    this.columnName = new FormControl('', [Validators.required])
    this.fingerprintType = new FormControl('', [Validators.required])
  }

  createForm() {
    this.fingerprintOnDemandForm = new FormGroup({
      zoneName: this.zoneName,
      sourceName: this.sourceName,
      tableName: this.tableName,
      columnName: this.columnName,
      fingerprintType: this.fingerprintType
    })
  }


  public selectZone(zoneName: string) {
    this.sourceNames = []
    this.selectedZone = zoneName

    this.fingerprintService
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

    this.fingerprintService
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

    this.fingerprintService
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
        this.columnNames.sort()
      }
      )
  }


  public selectColumn(columnName) {
    this.selectedColumns = columnName
    this.selectedMultipleColumns.push(columnName)
  }

  public fingerprint() {
    this.showProgressSpinner = true
    this.fingerprintData = {}
    this.fingerprintDataAcquired = false
    console.log('fingerprint clicked with column names as ' + this.selectedColumns + ' & table name as ' + this.selectedTable + ' & source name as ' + this.selectedSource + ' & zone name as ' + this.selectedZone)

    let sendOP = this.fingerprintOnDemandForm.value
    let zName = sendOP.zoneName
    let sName = sendOP.sourceName
    let tName = sendOP.tableName
    let cName = sendOP.columnName
    try {
      this.fingerprintService.fingerprint(cName, tName, sName, zName).subscribe(data=>{
        this.fingerprintData = JSON.parse(data)
        this.showProgressSpinner = false
        this.fingerprintDataAcquired = true
      })
    } catch(err) {
      console.log(`Error in Fingerprint Call ${err}`);
      
    }
    

  }

  reset() {
    this.fingerprintData = {}
    this.fingerprintDataAcquired = false
  }

}