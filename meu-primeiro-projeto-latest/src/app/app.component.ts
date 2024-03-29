import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent],
  template: `
  <!-- <router-outlet></router-outlet>, -->
    <h1>Curso de Angular</h1>
    <h2>Componentes</h2>
    <app-new-component/>
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
