import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NaverServices } from '../../shared/services';
import { ValidatorUtils } from '../../shared/utils';

@Component({
  selector: 'app-component-shortly',
  templateUrl: './shortly.component.html',
  providers: [ NaverServices ]
})

export class ShortlyComponent implements OnInit {

  form: FormGroup;
  formTargets: any;

  @ViewChild('url') url: ElementRef;
  shorltyUrl: string;

  constructor(
    private naverServices: NaverServices,
    private fb: FormBuilder,
    private renderer: Renderer2,
  ) {
  }

  ngOnInit(): void {
    this.formTargets = {
      'url': ''
    };
    this.setFormRuleSet();
  }

  setFormRuleSet(): void {
    this.form = this.fb.group({
      'url': ValidatorUtils.urlRuleSet(this.url.nativeElement.value)
    });
    this.form.valueChanges.subscribe(
      data => this.formTargets = ValidatorUtils.watchValueChanged(this.form, this.formTargets, data)
    );
    this.formTargets = ValidatorUtils.watchValueChanged(this.form, this.formTargets);
  }

  getShorty(): void {
    this.shorltyUrl = 'http://me2.do/5HC4WnIO';
    this.naverServices.getShortlyUrl(this.url.nativeElement.value).then(res => {
      console.log(res);
    });
  }
}
