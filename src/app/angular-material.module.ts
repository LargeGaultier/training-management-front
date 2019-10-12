import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
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
  MatInputModule,
  MatExpansionModule
];

@NgModule({
  imports: [...MAT_COMPONENTS_MODULES],
  exports: [...MAT_COMPONENTS_MODULES],
  providers: []
})
export class AngularMaterialModule {}
