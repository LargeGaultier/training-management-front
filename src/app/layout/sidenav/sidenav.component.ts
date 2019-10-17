import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LayoutModel, LayoutState } from '../layout.state';

@Component({
  selector: 'edx-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Select(LayoutState) layoutState$: Observable<LayoutModel>;
  constructor() {}
}
