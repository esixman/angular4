import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServices } from '../../../shared/services';

@Component({
  selector: 'app-main-signup',
  templateUrl: './signup.component.html',
  providers: [ AppServices ]
})
export class SignupComponent implements OnInit {

  urls: any;
  pageTitle: any = 'Sign Up';

  constructor(public router: Router, private appServices: AppServices) {
    this.urls = appServices.getUrls();
    appServices.setTitle(this.pageTitle);
  }

  ngOnInit(): void { }
}
