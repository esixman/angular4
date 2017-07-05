import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './main.layout.component';
import { IndexComponent, LoginComponent, SignupComponent, FileUploadComponent, UIComponent, ModeComponent } from '../../views/main';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignupComponent },
      { path: 'fileupload', component: FileUploadComponent },
      { path: 'ui', component: UIComponent },
      { path: 'mode', component: ModeComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainLayoutRoutingModule { }
