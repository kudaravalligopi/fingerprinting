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
  MatTableModule
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
    MatTableModule
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
    MatTableModule
  ]
})
export class MaterialModule {}