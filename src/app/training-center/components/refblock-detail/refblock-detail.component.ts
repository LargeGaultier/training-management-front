import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { RefBlock } from '../../../models/refBlock.model';

@Component({
  selector: 'trm-refblock-detail',
  templateUrl: './refblock-detail.component.html',
  styleUrls: ['./refblock-detail.component.scss']
})
export class RefBlockDetailComponent {
  @Input() refBlock: RefBlock;

  isEditing: boolean;

  refBlockForm: FormGroup = new FormGroup({
    label: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    degrees: new FormControl('', Validators.required)
  });

  constructor(private store: Store) {}

  get label() {
    return this.refBlockForm.get('label');
  }

  get description() {
    return this.refBlockForm.get('description');
  }

  get degrees() {
    return this.refBlockForm.get('degrees');
  }

  saveRefBlock() {
    // this.store.dispatch()
  }
}
