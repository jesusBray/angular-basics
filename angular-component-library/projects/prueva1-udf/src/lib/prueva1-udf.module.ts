import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatSlideToggleModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';

import { PRUEVA1UDFComponent } from './prueva1-udf.component';

@NgModule({
  declarations: [PRUEVA1UDFComponent],
  imports: [
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [PRUEVA1UDFComponent]
})
export class PRUEVA1UDFModule { }
