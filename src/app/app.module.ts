import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import { PolicyListComponent } from './policy-list/policy-list.component';
import {PolicyService} from "./policy.service";
import {ReactiveFormsModule} from "@angular/forms";
import { CreatePolicyComponent } from './create-policy/create-policy.component';
import { UpdatePolicyComponent } from './update-policy/update-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    PolicyListComponent,
    CreatePolicyComponent,
    UpdatePolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [PolicyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
