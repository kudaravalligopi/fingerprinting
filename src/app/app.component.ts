import { Component } from '@angular/core';
import {Globals} from './globals'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormLoginComponent} from './components/form-login/form-login.component'
import {ApiService} from './services/api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';


  constructor(public apiCall: ApiService, private globals: Globals, public dialog: MatDialog){

    // this.apiCall.loginCheck().subscribe(data=>{

    // })

  }


  openLoginForm(){
    let dialogRef = this.dialog.open(FormLoginComponent, {width: '40vw'})

    
  }
}
