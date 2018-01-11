
import { Component, OnInit } from '@angular/core'
import { Http, Response } from '@angular/http' //For HTTP Requests
import 'rxjs/add/operator/map' //Handling Received Data



import { ApiService } from '../../services/api.service'

import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';



@Component({
  selector: 'app-fingerprint-on-demand',
  templateUrl: './fingerprint-on-demand.component.html',
  styleUrls: ['./fingerprint-on-demand.component.sass']
})
export class FingerprintOnDemandComponent implements OnInit {

  title = `FingerPrint`
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
  selectedMultipleColumns: string[] = []
  fingerprintData: any
  fingerprintFlowStatus: boolean = false




  //Reactive Form
  fingerprintOnDemandForm: FormGroup

  zoneName: FormControl
  sourceName: FormControl
  tableName: FormControl
  columnName: FormControl
  fingerprintType: FormControl

  fingerprintFlowOn: boolean = false

  constructor(private api: ApiService) {

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


  //Form Controls
  createFormControls() {
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

  slideToggle(e) {
    this.fingerprintFlowStatus = !this.fingerprintFlowStatus
  }

  fingerprintFlow(status){
    let op = this.fingerprintOnDemandForm.value
    console.log(op);

    this.fingerprintFlowOn = !this.fingerprintFlowOn

    this.api.fingerprintFlow(op,status).subscribe((data)=>{
      console.log(data);
      
    })
    
  }
}