import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  template: `
        <main class="mx-auto max-w-3xl px-4 py-8">
            <router-outlet />
        </main>
  `
})

export class App {
  title : string = 'Brainers';
}

