import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './article/article.component';
import { RegisterComponent } from './register/register.component';
import { AgreementComponent } from './agreement/agreement.component';
import { VerificationComponent } from './verification/verification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ArticleComponent,
    RegisterComponent,
    AgreementComponent,
    VerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
