import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { RegisterComponent } from './register/register.component';
import { AgreementComponent } from './agreement/agreement.component';
import { WriteComponent } from './write/write.component';
import { UserComponent } from './user/user.component';
import { TransitionComponent } from './transition/transition.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'write', component: WriteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'agreement', component: AgreementComponent },
  { path: 'user', component: UserComponent },
  { path: 'transition/:state', component: TransitionComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
