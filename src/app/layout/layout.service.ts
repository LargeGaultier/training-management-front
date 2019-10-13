import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Layout, Sidenav } from './layout.actions';
import { LayoutBreakpoints } from './layout.model';

@Injectable()
export class LayoutService {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store
  ) {
    this.observeBreakpoint();
  }

  observeBreakpoint() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          const [small, medium, large] = Object.values(state.breakpoints);
          if (small) {
            this.smallScreen();
          } else if (medium) {
            this.mediumScreen();
          } else if (large) {
            this.largeScreen();
          }
        }
      });
  }

  private smallScreen() {
    this.store.dispatch([
      new Layout.SetBreakpoint(LayoutBreakpoints.Small),
      Sidenav.Close
    ]);
  }

  private mediumScreen() {
    this.store.dispatch([new Layout.SetBreakpoint(LayoutBreakpoints.Medium)]);
  }

  private largeScreen() {
    this.store.dispatch([
      new Layout.SetBreakpoint(LayoutBreakpoints.Large),
      Sidenav.Open
    ]);
  }
}
