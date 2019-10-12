import { RefDegree } from './refDegree.model';
import { RefUv } from './refUv.model';

export interface RefBlock {
  id: number;
  label: string;
  description: string;
  trainingCenterId: number;
  refDegreeDTOs: RefDegree[];
  refUvDTOs: RefUv[];
}
