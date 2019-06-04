import { Component, OnInit, Input, ViewChild,Renderer,forwardRef } from '@angular/core';
import {Unicorn} from '../unicorn';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import { __values } from 'tslib';
const VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UnicornDetailComponent),
  multi: true
};
@Component({
  selector: 'app-unicorn-detail',
  templateUrl: './unicorn-detail.component.html',
  providers: [VALUE_ACCESSOR],
  styleUrls: ['./unicorn-detail.component.css']
})
export class UnicornDetailComponent implements OnInit, ControlValueAccessor {
  @Input()unicorn:Unicorn;
  @Input() label: string = "Enter value here";
  @Input() required: boolean = true;
  private _value: any = '';
  private preValue: any = "as"
  private editing: boolean = false;
  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;
  constructor() { }

  ngOnInit() {
console.log(" nameeeee ", this.unicorn);
console.log(" _valuee ", this._value);

  }
  get value(): any {
    this._value = this.unicorn.location||'';
    console.log(" get value() ", this._value);
    console.log(" get unicorn() ", this.unicorn.location);
    return this._value;
  }

  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }
  writeValue(value: any) {
    this._value = value;
  }
  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
  onBlur($event: Event) {
    this.editing = false;
    if ( this._value ==""){
      this._value = "No value available";
    }
  }
  beginEdit(value) {
    this.preValue = value;
    this.editing = true;
  }
}


