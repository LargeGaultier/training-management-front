import { LayoutBreakpoints } from './layout.model';

export namespace Sidenav {
  export class Toggle {
    static readonly type = '[Layout] ToggleSidenav';
  }
  export class Open {
    static readonly type = '[Layout] OpenSidenav';
  }
  export class Close {
    static readonly type = '[Layout] CloseSidenav';
  }
}

export namespace Layout {
  export class SetBreakpoint {
    static readonly type = '[Layout] SetBreakPoint';
    constructor(public payload: LayoutBreakpoints) {}
  }
}
