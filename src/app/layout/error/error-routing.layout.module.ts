import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlConstants } from '../../shared/constants';

import { ErrorLayoutComponent } from './error.layout.component';
import { NotFoundComponent, ServerComponent  } from '../../views/error';

const routes: Routes = [
  {
    path: '', component: ErrorLayoutComponent,
    children: [
      { path: '', component: NotFoundComponent },
      { path: '404', component: NotFoundComponent },
      { path: '500', component: ServerComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ErrorLayoutRoutingModule { }
