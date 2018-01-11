import { Component, OnInit } from '@angular/core'
import { Http, Response } from '@angular/http' //For HTTP Requests
import 'rxjs/add/operator/map' //Handling Received Data

import { ApiService } from '../../services/api.service'

import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-curate-corpus-correction',
  templateUrl: './curate-corpus-correction.component.html',
  styleUrls: ['./curate-corpus-correction.component.sass']
})
export class CurateCorpusCorrectionComponent implements OnInit {
  title = 'Curate: Corpus Correction'
  curateCorpusForm: FormGroup
  corpusType: FormControl
  correctionMode: FormControl
  destination: FormControl
  format: FormControl
  corpusCorrection: FormControl

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.corpusType = new FormControl('', Validators.required)
    this.correctionMode = new FormControl('', Validators.required)
    this.destination = new FormControl('', Validators.required)
    this.format = new FormControl('', Validators.required)
    this.corpusCorrection = new FormControl('', Validators.required)

    this.curateCorpusForm = new FormGroup({
      corpusType: this.corpusType,
      correctionMode: this.correctionMode,
      destination: this.destination,
      format: this.format,
      corpusCorrection: this.corpusCorrection
    })
  }

}
