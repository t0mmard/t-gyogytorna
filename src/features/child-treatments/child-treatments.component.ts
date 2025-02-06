import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-child-treatments',
  imports: [MatCardModule],
  templateUrl: './child-treatments.component.html',
  styleUrl: './child-treatments.component.scss',
})
export class ChildTreatmentsComponent {}
