import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';


import { AppComponent } from './app.component';
import { IntroComponent } from './src/intro/intro.component';
import { GradeComponent } from './src/grade/grade.component';
import { PolicyComponent } from './src/policy/policy.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GradeComponent,
    PolicyComponent
  ],
  imports: [
    BrowserModule,
     MDBBootstrapModulesPro.forRoot(),
  ],
  providers: [
    MDBSpinningPreloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
