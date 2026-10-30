import { Component, effect, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SimpleEntityService } from '../simple-entity-service';
import { Observable } from 'rxjs';

export interface SimpleEntity {
  id: number;
  name: string;
}

@Component({
  imports: [MatTableModule],
  selector: 'app-overview',
  styleUrl: './overview.css',
  templateUrl: './overview.html',
})
export class Overview {
  displayedColumns: string[] = ['id', 'name'];
  dataSource!: Observable<SimpleEntity[]>;
  trackById = (_: number, entity: SimpleEntity): number => entity.id;

  private simpleEntityService = inject(SimpleEntityService);
  constructor() {
    effect(() => {
      this.dataSource = this.simpleEntityService.Get();
    });
  }
}
