import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'morningharwood-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  public routes: any[];
  public components: any[];
  public editableSchemas: any[] = [];
  public model = {};
  public form = new FormGroup({});
  public options: any = {};
  public block$: Observable<{ id: string }[]>;

  constructor(private db: AngularFirestore) {
    this.db.collection('routes')
        .valueChanges()
        .subscribe((items) => {
          this.routes = items;
        });

    this.db.collection('components')
        .valueChanges()
        .subscribe((items) => {
          this.components = items;
          console.log(this.components, 'components');
        });
  }

  public delete(schema) {
    console.log('cannot delete for now :(');
  }

  public loadAllComponentSchemas(event) {
    this.editableSchemas = [];
    this.block$ = this.db.collection('blocks', ref => ref.where('route', '==', event.route))
                      .snapshotChanges()
                      .pipe(
                        map(changes => {
                          return changes.map(a => {
                            const data = a.payload.doc.data();
                            const id = a.payload.doc.id;
                            const hasModel = () => data && data[ 'data' ] && data[ 'data' ][ 'id' ]
                                                   ? data[ 'data' ]
                                                   : {};

                            data[ 'schema' ][ 'fields' ] = this.components.find(component => component[ 'docKey' ] === data[ 'componentRef' ][ 'id' ])[ 'schema' ];
                            data[ 'schema' ][ 'model' ] = hasModel();
                            data[ 'schema' ][ 'options' ] = {};
                            data[ 'schema' ][ 'form' ] = new FormGroup({});
                            return { id, ...data };
                          });
                        }));

  }

  public submit(form) {
    const model = form.schema.model;
    const id = this.db.collection('blocks')
                   .doc(form.id)
                   .set({ data: model }, { merge: true });
    console.log(id);
    // .set({ schema: form.schema }, { merge: true });
  }
}
