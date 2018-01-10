
import { Component, OnInit } from '@angular/core'
import { Http, Response } from '@angular/http' //For HTTP Requests
import 'rxjs/add/operator/map' //Handling Received Data
import { FingerprintService } from '../../services/fingerprint.service'


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
  selectedMultipleColumns: string[] = []
  fingerprintData: any
  fingerprintFlowStatus: boolean = false




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
  //Populate Selects

  //to get all zones on initialize of component
  getZones() {
    this.zones = this.api.getZones()
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
        this.tableNames.sort()
      }
      )
  }


  //Form Controls
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

  slideToggle(e){
    this.fingerprintFlowStatus = !this.fingerprintFlowStatus
  }
 





}