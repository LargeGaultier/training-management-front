import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

const MAT_COMPONENTS_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule
];

@NgModule({
  imports: [...MAT_COMPONENTS_MODULES],
  exports: [...MAT_COMPONENTS_MODULES],
  providers: []
})
export class AngularMaterialModule {}
