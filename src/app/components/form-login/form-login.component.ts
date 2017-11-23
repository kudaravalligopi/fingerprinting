import { Component, OnInit, Inject, Input,Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {AppComponent} from '../../app.component'
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

import {Globals} from '../../globals'

//Call API
import {ApiService} from '../../services/api.service'


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass']
})
export class FormLoginComponent implements OnInit {

  loginForm: FormGroup //our form model
  username: FormControl
  password: FormControl
  title: string

  component: any = FormLoginComponent

  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    public globals: Globals,
    private formBuilder: FormBuilder,
    private apiCall: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
  ) { 
    
    }

  ngOnInit() {
    // console.log(`called by ${this.data.title}`);
  
    this.title = this.data.title

    //place to initialize form
    this.createFormControls()
    this.createForm()
    
  }

  createFormControls() {
    this.username= new FormControl('',[Validators.required, Validators.minLength(1)]),
    this.password= new FormControl('',[Validators.required,Validators.minLength(1)])
  }

  createForm() {
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    })
  }

  login() {
    // this.apiCall.login()
    this.apiCall.login(this.loginForm.value).subscribe(data=>{
      this.globals.loggedIn = true
      this.globals.username = data["username"]
      this.dialogRef.close()
    })
    
    
  }


}
