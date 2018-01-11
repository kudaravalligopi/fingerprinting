import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { Http, Response } from '@angular/http'
import { HttpClient } from '@angular/common/http'

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
    console.log(zone);

    return this.httpC.get(`/v1/s3/listdatabase?bucket_name=${zone}`)


  }

  public selectSource(source: string, zone: string) {
    //method which selects particular source

    return this.httpC.get(`/v1/s3/listtables?bucket_name=${zone}&database_name=${source}`)
  }

  public selectTable(table: string, source: string, zone: string) {
    //method which selects particular table
    //Select the table and populate the columns drop down



    return this.httpC.get(`/v1/s3/rawzone/listcolumns?bucket_name=${zone}&database_name=${source}&table_name=${table}`)
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
      columns[i] = `${column[i]}`
    }

    console.log(`Column names in API END POINT Front End`)

    console.log(columns);



    try {
      return this.httpC.post('/v1/autotagging/submit', { "data": { "table_name": table, "database_name": source, "bucket_name": zone, "type": "raw", "colums": columns } })
    } catch (err) {
      console.log(err);
      throw err

    }
  }

  private handleError(error: Response | any) {
    console.error(error)
    return Observable.throw(error)

  }

  getDatabaseProfile(env){
    console.log('Getting tables for profile');
    
    console.log(env);
    
    return this.httpC.get(`/api/v1/listdatabase?source_type=hive&environment=${env}`)
  }

  //curate

  submitTagCorrections(params) {
    console.log('IN CURATE API FE');
    console.log(params);



    // {"zoneName": "lmb-datalake-hdp-store-raw-nonprod","sourceName": "avaya","tableName": "customer_log","columnName": "date_occurred_s","tagInfo": [{"tagType": "MIO","tagCategory": "MIO-PUBLIC"},{"tagType": "SEC","tagCategory": "SEC-SSN"},{"tagType": "DOM","tagCategory": "DOM-CUSTOMER"}]}


    return this.httpC.post('/v1/autotagging/tagcorrectionsubmit', params)


  }


  getElements(params) {
    console.log(params);
    let link = ''
    if(params.categoryName == 'tables') {
      link = `/api/v1/listtables?source_type=hive&environment=${params.envName}&database_name=${params.dbName}&category_type=tables`
    } else {
      link = `/api/v1/listviews?source_type=hive&environment=${params.envName}&database_name=${params.dbName}&category_type=views`
    }
    return this.httpC.get(link)
    
  }

  profileData(params, state) {
    console.log(params)
    console.log(state);
    

    let nParams = {
      "data":{
        "source_type": "hive",

        "environment": `${params.envName}`,
    
        "database_name": `${params.dbName}`,
    
        "category_type": `${params.categoryName}`,
    
        "category_element": `${params.elementName}`,
    
        "profile_type": `${state}`
      }
    }

    return this.httpC.post('/api/v1/profiledata', nParams)
    
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

  fingerprintFlow(params,status) {
    let x = { "data": {"processor_group_id": "bb75b7fb-347a-3f59-b4a2-ca412e7829be", "processor_state" :`${status}`,  "nifi_user": "sacid_lmb_hdp_mdmsvc", "nifi_url": "https://ip-10-224-71-221.aws.lmig.com:9093", "aws_env": "nonprod",    "app_env": "integration","start_processor_group_name" :["AtlasBatchProcessing"]}}
    return this.httpC.post('http://10.224.69.47:8081/api/v1/nifi/update_processor_state', x)
  }

}
