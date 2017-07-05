import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from '../../../../shared/constants';
import { AppServices } from '../../../../shared/services';
import { StorageUtils } from '../../../../shared/utils';
import { StringUtils } from '../../../../shared/utils/src/string.utils';

@Component({
  selector: 'app-main-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ],
  providers: [ AppServices ]
})
export class HeaderComponent implements OnInit {

  urls: any;
  isLogined: boolean;

  constructor(public router: Router, private appServices: AppServices) {
    this.urls = appServices.getUrls();
    this.isLogined = false;
    if (StringUtils.isNotEmpty(StorageUtils.getItem(AuthConstants.authKey))) {
      this.isLogined = true;
    }
  }

  ngOnInit(): void {
  }

  onLoggedout(): void {
    StorageUtils.removeItem(AuthConstants.authKey);
    this.router.navigate([this.urls.index.index]);
    this.isLogined = false;
  }

}
