import {
  Directive,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';


@Directive({
  // tslint:disable-next-line
  selector: 'input[type=file]',
  host: {
    '(change)': 'onChange($event.target.files)',
    '(blur)': 'onTouched()',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileValueAccessor,
      multi: true,
    },
  ],
})
// https://github.com/angular/angular/issues/7341
export class FileValueAccessor implements ControlValueAccessor,
                                          OnInit {
  value: any;

  ngOnInit() {
    console.log('file');
  }

  onChange = (file) => {
    console.log(file, 'file');
  };
  onTouched = () => {
    console.log('touch');
  };

  writeValue(value) {
    console.log(value, 'write');
  }

  registerOnChange(fn: any) {
    console.log(fn, 'fn reg');
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    console.log(fn, 'fn touch');
    this.onTouched = fn;
  }
}
