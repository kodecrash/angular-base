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

  // tslint:disable-next-line:no-input-rename
  @Input('dateValue') _dateValue: Date;
  public bsConfig;
  private bsValue: Date;

  propagateChange  = (_: any) => {};
  get dateValue() {
    return this._dateValue;
  }

  set dateValue(val) {
    this._dateValue = val;
    this.propagateChange(val);
  }

  constructor() {
  }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' });
  }

  onDateChange(date: Date) {
    this.dateValue = date;
  }


  writeValue(value: any): void {
    if (value) {
      this.dateValue =  value;
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    console.log('register on touched.');
  }
  setDisabledState?(isDisabled: boolean): void {

  }
}
