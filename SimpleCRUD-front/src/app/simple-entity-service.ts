import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { SimpleEntity } from './overview/overview';
import { Observable } from 'rxjs';

@Service()
export class SimpleEntityService {
  private http = inject(HttpClient);

  Get(): Observable<SimpleEntity[]> {
    return this.http.get<SimpleEntity[]>("SimpleEntity/Get");
  }
}
