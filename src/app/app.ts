import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  template: `
    <header class="border-b">
      <nav class="mx-auto flex h-14 max-w-2xl items-center px-4">
        <a routerLink="/" class="text-lg font-semibold">Brainers</a>
      </nav>
    </header>

    <main class="mx-auto max-w-2xl px-4 py-8">
      <router-outlet />
    </main>
  `
})

export class App {}

