import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { CardComponent } from './shared/card/card.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent , RouterOutlet , FooterComponent , CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PC-Builder-Angular-App';
}
