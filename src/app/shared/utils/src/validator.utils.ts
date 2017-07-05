import { StringUtils } from './string.utils';

export class ValidatorUtils {

  protected static selections = [ 'checkbox', 'radio', 'select' ];

  /**
   * Validation Attribute @see html5 validation
   */
  protected  static attributes = {
    required: 'required',
    min: 'min',
    minLength: 'minlength',
    max: 'max',
    maxLength: 'maxlength',
    pattern: 'pattern',
  };

  protected static executeRegExp(pattern: string, value: any): boolean {
    const regexp = new RegExp(pattern);
    return !regexp.test(value); // 반환값이 true 일 때 메세지가 지정되므로, 실행결과를 반대로 반환한다.
  }

  protected static isSelection(type: string): boolean {
    return (this.selections.indexOf(type) >= 0);
  }

  protected static validNumber(element: any): boolean {
    if (element.type === 'number') {
      return this.executeRegExp('/^[0-9]$/g', element.value);
    } else {
      return false;
    }
  }

  protected static validEmail(element: any): boolean {
    if (element.type === 'email') {
      return this.executeRegExp('/^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/g', element.value);
    } else {
      return false;
    }
  }

  protected static validCheckbox(element: any): boolean {
    if(element.checked) {
      return false;
    } else {
      return true;
    }
  }

  protected static validRadio(element: any): boolean {
    /**
     * 차후 라디오 그룹에 대한 Validation 구현할 것!
     * 현재는 interface 만 정의
     */
    return false;
  }

  protected static validSelect(element: any): boolean {
    /**
     * 차후 <select>에 대한 Validation 구현할 것!
     * 현재는 interface 만 정의
     */
    return false;
  }

  protected static checkRequired(attr: any, element: any): boolean {
    const attribute: string = attr.name.toLowerCase();
    let isValid = false;
    if (attribute === this.attributes.required) {
      if (this.isSelection(element.type)) {
        switch(element.type) {
          case this.selections[0]:
            isValid = this.validCheckbox(element);
            break;
          case this.selections[1]:
            isValid = this.validRadio(element);
            break;
          case this.selections[2]:
            isValid = this.validSelect(element);
            break;
        }
      } else {
        isValid = StringUtils.isEmpty(element.value);
      }
    }
    return isValid;
  }

  protected static checkMinimum(attr: any, value: any): boolean {
    const attribute: string = attr.name.toLowerCase();
    if (attribute === this.attributes.min || attribute === this.attributes.minLength) {
      return (value.length < attr.value);
    }
  }

  protected static checkMaximum(attr: any, value: any): boolean {
    const attribute: string = attr.name.toLowerCase();
    if (attribute === this.attributes.max || attribute === this.attributes.maxLength) {
      return (value.length > attr.value);
    }
  }

  protected static checkPattern(attr: any, value: any): boolean {
    const attribute: string = attr.name.toLowerCase();
    if (attribute === this.attributes.pattern) {
      return this.executeRegExp(attr.value, value);
    }
  }

  constructor() {}

}
