import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { RefBlock } from '../../../models/refBlock.model';

@Injectable()
export class CourseService {
  constructor(private http: HttpClient) {}

  getRefBlocks(idTrainingCenter: number): Observable<RefBlock[]> {
    return this.http.get<RefBlock[]>(
      `${environment.apiTrainingCenter}${idTrainingCenter}${environment.routeRefBlocks}`
    );
  }
}
