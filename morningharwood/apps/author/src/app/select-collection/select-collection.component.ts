import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import {
  FormlyFieldConfig,
  FormlyFormOptions,
} from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import {
  startWith,
  takeUntil,
  tap,
} from 'rxjs/operators';


@Component({
  selector: 'morningharwood-select-collection',
  templateUrl: './select-collection.component.html',
  styleUrls: [ './select-collection.component.scss' ],
})
export class SelectCollectionComponent implements OnInit,
                                                  OnDestroy {
  @Input() dropDownOptions: Array<any>;
  @Input() keyName: string[];
  @Input() label: string[];
  @Input() valueProp: string[];
  @Input() labelProp: string[];
  @Output() selection: EventEmitter<any> = new EventEmitter<any>();
  private onDestroy$ = new Subject<void>();
  private readonly type = 'select';
  public model: any;
  public options: FormlyFormOptions;
  public fields: FormlyFieldConfig[];
  public form: FormGroup;

  constructor(private db: AngularFirestore) {

  }


  ngOnInit() {
    console.log(this.dropDownOptions);
    this.options = {};
    this.fields = [
      {
        key: this.keyName[ 0 ],
        type: this.type,
        templateOptions: {
          label: this.label[ 0 ],
          options: this.dropDownOptions[ 0 ],
          valueProp: this.valueProp[ 0 ],
          labelProp: this.labelProp[ 0 ],
          required: true,
        },
        lifecycle: {
          onInit: (form) => {
            form.get(this.keyName[ 0 ])
                .valueChanges
                .pipe(
                  takeUntil(this.onDestroy$),
                  startWith(form.get(this.keyName[ 0 ]).value),
                  tap(value => {
                    if (value) {
                      this.selection.emit({ route: value });
                    }
                  }))
                .subscribe();
          },
        },
      },
      {
        key: this.keyName[ 1 ],
        type: this.type,
        templateOptions: {
          label: this.label[ 1 ],
          options: this.dropDownOptions[ 1 ],
          valueProp: this.valueProp[ 1 ],
          labelProp: this.labelProp[ 1 ],
          required: true,
        },
      },
    ];
    this.model = {};
    this.form = new FormGroup({});
  }

  public submit() {
    const id = this.db.createId();
    const componentRef = this.db.doc(`components/${this.model.component}`).ref;
    const routeRef = this.db.doc(`routes/${this.model.route}`).ref;
    this.db.collection('blocks')
        .doc(id)
        .set({
          componentRef,
          routeRef,
          data: {},
          schema: {},
          route: this.model.route,
        });
    this.selection.emit(this.model);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
