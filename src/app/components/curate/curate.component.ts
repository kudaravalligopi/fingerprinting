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
  

  fingerprintData: any

  constructor(private curateService: CurateService, private api: ApiService) {

  }

  public ngOnInit() {
    //to get all zones on initialize of component
    this.curateService
      .getAllZones()
      .subscribe(
      (zones) => {
        this.zones = zones
      }
      )

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
    
  }

  reset() {
    this.fingerprintData = {}
    this.fingerprintDataAcquired = false
  }

}
