import { RefTrainingYear } from './refTrainingYear.model';

export interface RefDegree {
  id: number;
  name: string;
  refTrainingYear: RefTrainingYear[];
}
