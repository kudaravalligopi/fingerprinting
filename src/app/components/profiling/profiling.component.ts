import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';

import {ApiService} from '../../services/api.service'

@Component({
  selector: 'app-profiling',
  templateUrl: './profiling.component.html',
  styleUrls: ['./profiling.component.sass']
})
export class ProfilingComponent implements OnInit {

  profilingForm: FormGroup
  dbName: FormControl
  categoryName: FormControl
  elementName: FormControl
  envName: FormControl
  databases: any
  link = "https://drive.google.com/a/quantiphi.com/file/d/11RmdbFcwXNR40Ny4wK8O6HikaYEpGP7g/view?usp=sharing"

  showProfile: boolean = false
  newLink
  constructor(public sanitizer: DomSanitizer, public api: ApiService) {
    this.newLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.link)
   }

  ngOnInit() {
    this.createFormControls()
    this.createForm()
  }

  createFormControls() {
    this.dbName = new FormControl('', Validators.required)
    this.categoryName = new FormControl('', Validators.required)
    this.elementName = new FormControl('', Validators.required)
    this.envName = new FormControl('', Validators.required)
  }

  createForm(){
    this.profilingForm = new FormGroup({
      dbName: this.dbName,
      categoryName: this.categoryName,
      elementName: this.elementName,
      envName: this.envName
    })
  }

  showProfileToggle(e){
    this.showProfile = true
  }

  getDatabase(env){
    console.log(env);
    
    this.api.getDatabaseProfile(env).subscribe((data)=>{
      console.log(data);
      
    })
  }
  
}
