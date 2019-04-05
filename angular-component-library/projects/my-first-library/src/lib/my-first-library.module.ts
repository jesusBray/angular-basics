import { NgModule } from '@angular/core';
import { MyFirstLibraryComponent } from './my-first-library.component';

import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [MyFirstLibraryComponent],
  imports: [
    MatToolbarModule,
  ],
  exports: [MyFirstLibraryComponent]
})
export class MyFirstLibraryModule { }
