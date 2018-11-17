import {
  Directive,
  HostListener,
  Input,
} from '@angular/core';
import { StoreNavigateService } from '../service';



@Directive({
  selector: '[lbNavigate]',
})
export class NavigateDirective {
  @Input() route: string;

  constructor(private navigate: StoreNavigateService) {
  }

  @HostListener('click')
  public click(): void {
    this.navigate.go(this.route);
  }
}
