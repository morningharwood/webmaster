import {
  ApplicationRef,
  Component,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  NavigationEnd,
  Router,
} from '@angular/router';
import {
  filter,
  map,
  mergeMap,
} from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'mh-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  public items: any;
  private router$: Observable<any>;
  private merged$: Observable<any[]>;

  constructor(private db: AngularFirestore,
              private app: ApplicationRef,
              private router: Router) {
  }


  ngOnInit() {
    this.router$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(x => x[ 'url' ]),
    );

    this.merged$ = this.router$.pipe(
      mergeMap(val => {
          const calcUrl = () => val === '/'
                                ? 'root'
                                : val;
          return this.db.collection('blocks', ref => ref.where('route', '==', calcUrl()))
                     .valueChanges();
        },
      ));

    this.merged$.subscribe(items => {
      this.items = items.map(i => i[ 'data' ])
                        .reduce((acc, val) => {
                          acc[ val.id ] = val;
                          return acc;
                        }, {});
      console.log(this.items);
      this.app.tick();
    });
  }
}
