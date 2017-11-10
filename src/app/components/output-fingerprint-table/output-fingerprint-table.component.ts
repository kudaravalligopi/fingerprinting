import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'output-fingerprint-table',
  templateUrl: './output-fingerprint-table.component.html',
  styleUrls: ['./output-fingerprint-table.component.sass']
})
export class OutputFingerprintTableComponent implements OnInit {

  tableHeads: string[] = [
    "Source",
    "Error",
    "Invocation Type",
    "Table Name",
    "Column",
    "MIO Tag",
    "SEC Tag",
    "MIO Confidence",
    "SEC Confidence",
    "Empty",
    "Column Error"
  ]

  @Input() fingerprintResult: any

  constructor() { }

  ngOnInit() {
    console.log(this.fingerprintResult);

    console.log(`Results in for demo purposes`);
    console.log(`Source = ${this.fingerprintResult.Source}`);
    console.log(`Error = ${this.fingerprintResult.Error}`);  
    console.log(`Invocation Type = ${this.fingerprintResult.InvocationType}`);
    console.log(`Table Name = ${this.fingerprintResult.Table}`);
    console.log(`Columns = ${this.fingerprintResult.Columns[0].Name}`);
    console.log(`MIO Tag = ${this.fingerprintResult.Columns[0].Tag[0].MIO}`);
    console.log(`SEC Tag = ${this.fingerprintResult.Columns[0].Tag[0].Security}`);
    console.log(`MIO Confidence = ${this.fingerprintResult.Columns[0].MIO_Confidence}`);
    console.log(`SEC Confidence = ${this.fingerprintResult.Columns[0].SEC_Confidence}`);
    console.log(`Empty = ${this.fingerprintResult.Columns[0].Empty}`);    
    console.log(`Column Error= ${this.fingerprintResult.Columns[0].Error}`);    

  }

}
