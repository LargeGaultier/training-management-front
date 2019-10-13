import { RefBlock } from '../models/refBlock.model';
import { RefDegree } from '../models/refDegree.model';

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

export class SelectRefBlock {
  static readonly type = '[TrainingCenter Page] SelectRefBlock';
  constructor(public payload: RefBlock) {}
}

export namespace RefDegrees {
  export class Get {
    static readonly type = '[TrainingCenter Page] GetRefDegrees';
  }

  export class GetSuccess {
    static readonly type = '[TrainingCenter Page] GetRefDegreesSuccess';
    constructor(public payload: RefDegree[]) {}
  }

  export class GetFail {
    static readonly type = '[TrainingCenter Page] GetRefDegreesFail';
  }
}
