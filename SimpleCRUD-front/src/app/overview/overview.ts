import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface SimpleEntity {
  id: number;
  name: string;
}

const DATA: SimpleEntity[] = [
  { id: 1, name: 'Hydrogen' },
  { id: 2, name: 'Helium' },
  { id: 3, name: 'Lithium' },
  { id: 4, name: 'Beryllium' },
  { id: 5, name: 'Boron' },
  { id: 6, name: 'Carbon' },
  { id: 7, name: 'Nitrogen' },
  { id: 8, name: 'Oxygen' },
  { id: 9, name: 'Fluorine' },
  { id: 10, name: 'Neon' },
];

@Component({
  imports: [MatTableModule],
  selector: 'app-overview',
  styleUrl: './overview.css',
  templateUrl: './overview.html',
})
export class Overview {
  displayedColumns: string[] = ['id', 'name'];
  dataSource = DATA;
  trackById = (_: number, entity: SimpleEntity): number => entity.id;
}
