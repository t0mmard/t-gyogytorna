import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'

export interface PriceElement {
  name: string;
  length: string;
  price: string;
}

const PRICES_DATA: PriceElement[] = [
  {name: "Első alkalom: Vizsgálat + kezelés", length: "60-90 perc", price: "13.000 Ft"},
  {name: "Egyéni felnőttgyógytorna kezelés", length: "50 perc", price: "13.000 Ft"},
  {name: "Egyéni gyermekgyógytorna kezelés", length: "45-50 perc", price: "13.000 Ft"}
];

@Component({
  selector: 'app-prices',
  imports: [MatCardModule, MatTableModule],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss'
})
export class PricesComponent {
  displayedColumns: string[] = ['name', 'length', 'price'];
  dataSource = PRICES_DATA;
}
