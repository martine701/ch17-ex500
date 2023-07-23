import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedComponent, NonAuthenticatedComponent } from './app.component';
import { ActivateService } from './activate.service';

const routes: Routes = [
  { path: 'authenticated', component: AuthenticatedComponent, canActivate: [ActivateService] },
  { path: '**', component: NonAuthenticatedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserService, ActivateService]
})
export class AppRoutingModule { }
