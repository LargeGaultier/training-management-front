import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

const MAT_COMPONENTS_MODULES = [
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  imports: [...MAT_COMPONENTS_MODULES],
  exports: [...MAT_COMPONENTS_MODULES],
  providers: []
})
export class AngularMaterialModule {}
