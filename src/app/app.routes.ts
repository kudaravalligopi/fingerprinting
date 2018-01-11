import { Routes, RouterModule } from '@angular/router';

//Component Declarations

import {FingerprintComponent} from './components/fingerprint/fingerprint.component'
import {CatalogComponent} from './components/catalog/catalog.component'
import {CurateComponent} from './components/curate/curate.component'
import {CurateCorpusCorrectionComponent} from './components/curate-corpus-correction/curate-corpus-correction.component'
import {KnowledgeGraphComponent} from './components/knowledge-graph/knowledge-graph.component'
import {ProfilingComponent} from './components/profiling/profiling.component'
import {SourcesComponent} from './components/sources/sources.component'
import {FingerprintOnDemandComponent} from './components/fingerprint-on-demand/fingerprint-on-demand.component'

import {HomeComponent} from './components/home/home.component'

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'fingerprint', component: FingerprintComponent },
    { path: 'fingerprint-on-demand', component: FingerprintOnDemandComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'curate-tag-correction', component: CurateComponent },
    { path: 'curate-corpus-correction', component: CurateCorpusCorrectionComponent },
    { path: 'knowledge-graph', component: KnowledgeGraphComponent },
    { path: 'profiling', component: ProfilingComponent },
    { path: 'sources', component: SourcesComponent },
    { path: 'logout', redirectTo:'/logout'}

    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

export const Routings = RouterModule.forRoot(appRoutes);