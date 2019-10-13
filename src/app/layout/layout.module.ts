import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const DECLARATIONS = [SidenavComponent, ToolbarComponent];

@NgModule({
  imports: [AngularMaterialModule, CommonModule, RouterModule],
  declarations: [...DECLARATIONS],
  entryComponents: [],
  providers: [],
  exports: [...DECLARATIONS]
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutModule,
      providers: []
    };
  }
}
