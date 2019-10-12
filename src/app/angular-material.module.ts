import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

const MAT_COMPONENTS_MODULES = [
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatInputModule
];

@NgModule({
  imports: [...MAT_COMPONENTS_MODULES],
  exports: [...MAT_COMPONENTS_MODULES],
  providers: []
})
export class AngularMaterialModule {}
