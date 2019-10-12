import { Component, Input } from '@angular/core';
import { RefBlock } from '../../../models/refBlock.model';

@Component({
  selector: 'trm-refblock-list-item',
  templateUrl: './refblock-list-item.component.html',
  styleUrls: ['./refblock-list-item.component.scss']
})
export class RefBlockListItemComponent {
  @Input() refBlock: RefBlock;
}
