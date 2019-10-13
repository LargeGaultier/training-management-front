import { Component, Input } from '@angular/core';
import { RefBlock } from '../../../models/refBlock.model';

@Component({
  selector: 'trm-refblock-detail',
  templateUrl: './refblock-detail.component.html',
  styleUrls: ['./refblock-detail.component.scss']
})
export class RefBlockDetailComponent {
  @Input() refBlock: RefBlock;
}
