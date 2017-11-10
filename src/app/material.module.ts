import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatInputModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatDialogModule,
  MatTableModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatDialogModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatDialogModule,
    MatTableModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {}