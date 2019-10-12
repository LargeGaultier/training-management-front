import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorsRoutingModule } from './errors-routing.module';
import { NotFoundPage } from './not-found-page/not-found.page';

@NgModule({
  declarations: [NotFoundPage],
  providers: [],
  imports: [CommonModule, ErrorsRoutingModule],
  exports: []
})
export class ErrorsModule {}
