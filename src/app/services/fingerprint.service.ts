import { Injectable } from '@angular/core';
//Models
import {Zones} from '../models/zones'
import {Sources} from '../models/sources'
import {Tables} from '../models/tables'
import {Columns} from '../models/columns'
import {FingerprintJSON} from '../models/fingerprintJSON'

import {ApiService} from './api.service'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class FingerprintService {

  constructor(
    private api: ApiService
  ) { }

  getAllZones(){
    return this.api.getZones()
  }

  selectZone(zoneName: string):Observable<Object>{
    return this.api.selectZone(zoneName)
  }

  selectSource(sourceName: string, zoneName: string):Observable<Object>{
    return this.api.selectSource(sourceName, zoneName)
  }

  selectTable(tableName: string, sourceName: string, zoneName: string):Observable<Object>{
    return this.api.selectTable(tableName, sourceName, zoneName)
  }
  fingerprint(columnName:string[] ,tableName: string, sourceName: string, zoneName: string):Observable<string> {
    return this.api.fingerprint(columnName,tableName,sourceName,zoneName)
  }
}
