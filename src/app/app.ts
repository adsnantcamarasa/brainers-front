import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar';

@Component({
  imports: [RouterOutlet, Navbar],
  selector: 'app-root',
  template: `
    <app-navbar />
        <main class="mx-auto max-w-3xl px-4 py-8">
            <router-outlet />
        </main>
  `
})

export class App {
  title : string = 'Brainers';
}

