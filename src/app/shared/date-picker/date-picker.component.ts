import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {

  @Input() datevalue: Date;
  public bsConfig;
  private bsValue: Date;

  constructor() {
  }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' });
    this.bsValue = new Date(this.datevalue);
  }

  onDateChange(date: Date) {
    console.log(date);
  }

  writeValue(value: any): void {
    if (value) {
      this.bsValue =  new Date(value);
    }

  }
  registerOnChange(fn: any): void {

  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {

  }
}
