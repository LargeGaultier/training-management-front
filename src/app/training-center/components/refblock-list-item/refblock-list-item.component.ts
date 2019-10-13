import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { RefBlock } from '../../../models/refBlock.model';
import { SelectRefBlock } from '../../training-center.actions';

@Component({
  selector: 'trm-refblock-list-item',
  templateUrl: './refblock-list-item.component.html',
  styleUrls: ['./refblock-list-item.component.scss']
})
export class RefBlockListItemComponent {
  @Input() refBlock: RefBlock;

  constructor(private store: Store) {}

  selectRefBlock() {
    this.store.dispatch(new SelectRefBlock(this.refBlock));
  }
}
