import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Sidenav } from '../layout.actions';

@Component({
  selector: 'trm-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(private store: Store) {}

  sidenavToggle() {
    this.store.dispatch(Sidenav.Toggle);
  }
}
