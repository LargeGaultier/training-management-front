import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { SidenavComponent } from './sidenav/sidenav.component';

const DECLARATIONS = [SidenavComponent];

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
