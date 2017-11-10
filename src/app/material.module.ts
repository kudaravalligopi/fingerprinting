import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdSelectModule,
  MdInputModule,
  MdAutocompleteModule,
  MdTooltipModule,
  MdDialogModule,
  MdTableModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdSelectModule,
    MdInputModule,
    MdAutocompleteModule,
    MdTooltipModule,
    MdDialogModule,
    MdTableModule
  ],
  exports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdSelectModule,
    MdInputModule,
    MdAutocompleteModule,
    MdTooltipModule,
    MdDialogModule,
    MdTableModule
  ]
})
export class MaterialModule {}