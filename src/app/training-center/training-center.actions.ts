import { RefBlock } from '../models/refBlock.model';

export class GetRefBlocks {
  static readonly type = '[TrainingCenter Page] GetRefBlocks';
}

export class GetRefBlocksSuccess {
  static readonly type = '[TrainingCenter Page] GetRefBlocksSuccess';
  constructor(public payload: RefBlock[]) {}
}

export class GetRefBlocksFail {
  static readonly type = '[TrainingCenter Page] GetRefBlocksFail';
}
