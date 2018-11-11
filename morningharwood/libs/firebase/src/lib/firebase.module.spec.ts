import {
  async,
  TestBed,
} from '@angular/core/testing';
import { FirebaseModule } from './firebase.module';
import { MorningHarwood } from './firebase-config';


describe('FirebaseModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FirebaseModule ],
    })
           .compileComponents();
  }));

  it('should create', () => {
    expect(FirebaseModule)
      .toBeDefined();
  });

  it('should have firebase config', () => {
    expect(MorningHarwood.apiKey)
      .toBeDefined();
  });
});
