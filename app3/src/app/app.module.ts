
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormComponentComponent } from './form-component/form-component.component';

//importando el formulario
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';

//importando el button
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

//connecion y uso rest (ojo muy diferente "HttpClientModule" a {HttpClient esta libreria nos permite usarlas en clases para el uso de http:rest})
import { HttpClientModule }    from '@angular/common/http';
import { UserService} from './form-component/services-form/user.service';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

/////////





@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    HomeComponent,
    UserComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
