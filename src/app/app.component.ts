import { Component } from '@angular/core';
import {Globals} from './globals'
import {DomSanitizer} from '@angular/platform-browser'
import {MatIconRegistry} from '@angular/material'
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


  constructor(public apiCall: ApiService, public globals: Globals, public dialog: MatDialog, matIconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
    matIconRegistry.addSvgIcon('lmLogo', sanitizer.bypassSecurityTrustResourceUrl('assets/lmTool.svg'))
    // this.apiCall.loginCheck().subscribe(data=>{

    // })

  }


  logOut() {
    this.apiCall.logOut().subscribe((data)=>{
      console.log(data);
      
    })
  }
}
