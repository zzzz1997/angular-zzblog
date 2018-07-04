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
import { CookieModule } from 'ngx-cookie';
import { CommentComponent } from './comment/comment.component';
import { WriteComponent } from './write/write.component';
import { QuillModule } from 'ngx-quill';
import { UserComponent } from './user/user.component';
import { TransitionComponent } from './transition/transition.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ArticleComponent,
    RegisterComponent,
    AgreementComponent,
    VerificationComponent,
    CommentComponent,
    WriteComponent,
    UserComponent,
    TransitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CookieModule.forRoot(),
    QuillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
