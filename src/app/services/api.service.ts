import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { Http, Response } from '@angular/http'
import { HttpClient, HttpParams } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = '/'

@Injectable()
export class ApiService {

  constructor(
    public http: Http,
    public httpC: HttpClient
  ) { }

  public getZones() {
    //method to get all zones
    // return this.httpC.get('http://10.224.69.47:3000/fingerprint/zones')
    //   .catch(this.handleError)
    let prod = ["lmb-datalake-hdp-store-raw-nonprod", "lmb-datalake-hdp-store-raw-prod", "lmb-datalake-hdp-store-raw-prod-stage"]
    return prod

  }

  public selectZone(zone: string) {
    //method which selects particular zone
    //Select the zone and populate the source drop down
    let params = new HttpParams().set('bucket_name', zone)
    return this.http.get('http://10.224.69.47:9090/v1/s3/listdatabase', { params: params })


  }

  public selectSource(source: string, zone: string) {
    //method which selects particular source
    let params = new HttpParams().set('bucket_name', zone)
    params.append('database_name', source)
    return this.httpC.get('http://10.224.69.47:9090/v1/s3/listtables', { params: params })
  }

  public selectTable(table: string, source: string, zone: string) {
    //method which selects particular table
    //Select the table and populate the columns drop down
    let params = new HttpParams().set('bucket_name', zone)
    params.append('database_name', source)
    params.append('table_name', table)

    return this.httpC.get('"http://10.224.69.47:9090/v1/s3/rawzone/listcolumns', { params: params })
  }


  public fingerprint(column: string[], table: string, source: string, zone: string) {
    console.log(`
    Column Name : ${column}
    Table Name : ${table}
    Source Name : ${source}
    Zone Name : ${zone}
    `);

    let columns = []
    for (let i = 0; i < column.length; i++) {
        column[i] = `"${column[i]}"`
    }

    try {
      return this.httpC.post('http://10.224.69.47:9090/v1/autotagging/submit', { "data": { "table_name": table, "database_name": source, "bucket_name": zone, "type": "raw", "colums": [columns]}})
    } catch (err) {
      console.log(err);
      throw err

    }
  }

  private handleError(error: Response | any) {
    console.error(error)
    return Observable.throw(error)

  }


  //curate

  submitTagCorrections(params) {
    console.log('IN CURATE API FE');
    console.log(params);

    try {
      return this.http.post('http://10.224.69.47:9090/v1/autotagging/tagcorrectionsubmit', params)

        .map(data => {
          console.log(data)
          return data.json()
        })
    } catch (err) {
      console.log(err);
      throw err

    }

  }

  //login stuff
  login(params) {
    let loginCreds = Object.values(params)
    let loginCredsObj = {
      "username": loginCreds[0].toString(),
      "password": loginCreds[1].toString(),
    }
    console.log(loginCredsObj);

    return this.http.post('/login', loginCreds)
  }

  loginCheck() {
    return this.http.get('/login/login-check')
  }

}
