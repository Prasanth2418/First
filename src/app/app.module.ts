import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './Components/card/card.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserNameComponent } from './Components/user-name/user-name.component';
import { RegisterFormComponent } from './Components/register-form/register-form.component';
import { ShoppingComponent } from './Components/shopping/shopping.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    UserNameComponent,
    RegisterFormComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
