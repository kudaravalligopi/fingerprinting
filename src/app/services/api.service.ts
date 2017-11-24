import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import {  Http, Response } from '@angular/http'
import  {HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs/Observable'

import { Zones } from '../models/zones'
import { Sources } from '../models/sources'
import { Tables } from '../models/tables'
import { Columns } from '../models/columns'
import { FingerprintJSON } from '../models/fingerprintJSON'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = '/'

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) { }

  public getZones() {
    //method to get all zones
    return this.http
      .get('http://10.224.69.47:3000/fingerprint/zones')
      .map(response => {
        const zones = response.json()
        return zones.map((zones) => new Zones(zones))
      })
      .catch(this.handleError)

  }

  public selectZone(zone: string) {
    //method which selects particular zone
    //Select the zone and populate the source drop down
    var zoneObj = {
      zoneName: zone
    }
    return this.http
      .post('http://10.224.69.47:3000/fingerprint/sources', zoneObj)
      .map(response => {
        const sources = response.json()
        console.log('sources from API');
        console.log(sources);
        console.log(sources.databases);
        
        return sources.databases
      })


  }

  public selectSource(source: string, zone: string) {
    //method which selects particular source
    //Select the source and populate the tables drop down
    var sourceObj = {
      sourceName: source,
      zoneName: zone
    }

    return this.http
      .post('http://10.224.69.47:3000/fingerprint/tables', sourceObj)
      .map(response => {
        const tables = response.json()
        console.log('tables from API ');
        console.log(tables);

        
        console.log(tables.tables);
        
        return tables.tables
      })

  }

  public selectTable(table: string, source: string, zone: string) {
    //method which selects particular table
    //Select the table and populate the columns drop down
    var tableObj = {
      tableName: table,
      sourceName: source,
      zoneName: zone
    }

    return this.http
      .post('http://10.224.69.47:3000/fingerprint/columns', tableObj)
      .map(response => {
        const columns = response.json()
        console.log('columns from API ');
        console.log(columns);

        
        console.log(columns.columns);
        
        return columns.columns
      })

  }

  public selectColumn(column: string) {
    //method which selects particular column
  }

  public fingerprint(column: string[], table: string, source: string, zone: string) {
    console.log(`
    Column Name : ${column}
    Table Name : ${table}
    Source Name : ${source}
    Zone Name : ${zone}
    `);


     try{
       return this.http
       .post('http://10.224.69.47:3000/fingerprint/final', {zoneName: zone, sourceName: source, tableName: table, columnName: column})
       .map(data=>{
        console.log(data);
        return data.json()}
       )
     } catch(err){
       console.log(err);
       throw err
      
     }
  }

  private handleError(error: Response | any) {
    console.error(error)
    return Observable.throw(error)

  }


  //curate

  submitTagCorrections(params){
    console.log('IN CURATE API FE');
    console.log(params);
    try{
      return this.http
      .post('http://10.224.69.47:3000/curate/final', params)
      .map(data=>{
        console.log(data)
        return data.json()
      })
    } catch(err) {
      console.log(err);
      throw err
      
    }
    
    
    
  }

  //login stuff
  login(params){
    let loginCreds = Object.values(params)
    let loginCredsObj = {
      "username": loginCreds[0].toString(),
      "password": loginCreds[1].toString(),
    }
    console.log(loginCredsObj);
    
    return this.http.post('/login', loginCreds)
  }

  loginCheck(){
    return this.http.get('/login/login-check')
  }

}
