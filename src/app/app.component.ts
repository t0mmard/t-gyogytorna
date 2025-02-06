import { Component } from '@angular/core';
import { MenuComponent } from "../features/menu/menu.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../features/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [MenuComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'evi-site';
}
