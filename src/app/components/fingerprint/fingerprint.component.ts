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
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.component.html',
  styleUrls: ['./fingerprint.component.sass'],
  providers: [ApiService, FingerprintService]
})
export class FingerprintComponent implements OnInit {
  title = `FingerPrint`
  fingerprintDataAcquired:boolean = false
  showProgressSpinner: boolean = false
  zones: string[] = []

  sources
  tables
  columns

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
  fingerprintForm: FormGroup

  zoneName : FormControl
  sourceName : FormControl
  tableName : FormControl
  columnName : FormControl



  constructor(private fingerprintService: FingerprintService, private api: ApiService) {

  }

  public ngOnInit() {
    
    this.getZones()
    this.createFormControls()
    this.createForm()
    
  }

  //to get all zones on initialize of component
  getZones() {
    this.zones = this.api.getZones()
  }

  createFormControls(){
    this.zoneName = new FormControl('', [Validators.required])
    this.sourceName = new FormControl('', [Validators.required])
    this.tableName = new FormControl('', [Validators.required])
    this.columnName = new FormControl('', [Validators.required])
  }

  createForm() {
    this.fingerprintForm = new FormGroup({
      zoneName: this.zoneName,
      sourceName: this.sourceName,
      tableName: this.tableName,
      columnName: this.columnName
    })
  }


  public selectZone(zoneName: string) {
    this.sourceNames = []
    this.selectedZone = zoneName

    this.api.selectZone(this.selectedZone)
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

    this.api
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
        let x: string[] = Object.values(columns)
        console.log(x)
        for (let i = 0; i < x.length; i++) {
          this.columnNames[i] = x[i]
        }
        this.columnNames.sort()
      }
      )
  }


  public fingerprint() {
    this.showProgressSpinner = true
    this.fingerprintData = {}
    this.fingerprintDataAcquired = false
    
    let sendOP = this.fingerprintForm.value
    let zName = sendOP.zoneName
    let sName = sendOP.sourceName
    let tName = sendOP.tableName
    let cName = sendOP.columnName
    try {
      this.api.fingerprint(cName, tName, sName, zName).subscribe(data=>{
        console.log(data)
        this.fingerprintData = data
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
