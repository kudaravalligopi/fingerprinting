import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Individual Components
import { FingerprintComponent } from './components/fingerprint/fingerprint.component';
import { SourcesComponent } from './components/sources/sources.component';
import { ProfilingComponent } from './components/profiling/profiling.component';
import { CurateComponent } from './components/curate/curate.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { KnowledgeGraphComponent } from './components/knowledge-graph/knowledge-graph.component';

//Routes
import {Routes, RouterModule} from '@angular/router'
import {Routings} from './app.routes'

//Forms Module
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

//Http Module For Http requests

import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http'

//Services
import { ApiService } from './services/api.service'
import { FingerprintService } from './services/fingerprint.service'

//Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import  {MaterialModule} from './material.module';
import { ConfigureSourceComponent } from './components/configure-source/configure-source.component';
import { OutputFingerprintTableComponent } from './components/output-fingerprint-table/output-fingerprint-table.component'

@NgModule({
  declarations: [
    AppComponent,
    FingerprintComponent,
    SourcesComponent,
    ProfilingComponent,
    CurateComponent,
    CatalogComponent,
    KnowledgeGraphComponent,
    ConfigureSourceComponent,
    OutputFingerprintTableComponent
  ],
  entryComponents: [
    ConfigureSourceComponent
  ],
  imports: [
    BrowserModule,

    //Angular Material Imports
    MaterialModule,
    BrowserAnimationsModule,

    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //Routings
    Routings
  ],
  providers: [FingerprintComponent, ApiService, FingerprintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
