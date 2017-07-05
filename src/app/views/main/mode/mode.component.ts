import { Component, OnInit, ViewChild } from '@angular/core';
import { AppServices } from '../../../shared/services';

import { InputTextComponent } from '../../../components';


@Component({
  selector: 'app-main-mode',
  templateUrl: './mode.component.html',
  providers: [ AppServices ]
})
export class ModeComponent implements OnInit {

  appConst: any;
  urls: any;
  pageTitle: any = 'Mode';
  mode: string;

  @ViewChild(InputTextComponent)
  private inputText: InputTextComponent;

  constructor(private appServices: AppServices) {
    this.appConst = appServices.getAppConstant();
    this.urls = appServices.getUrls();
    appServices.setTitle(this.pageTitle);

    this.mode = this.appConst.mode.create;
  }

  ngOnInit(): void {

  }

  public setMode(mode: string): void {
    this.mode = mode;
    this.inputText.setMode(this.mode);
  }

}
