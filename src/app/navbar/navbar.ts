import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  template: `
    <header class="border-b">
      <nav class="mx-auto flex h-14 max-w-3xl items-center px-4">
        <a routerLink="/" class="text-lg font-semibold">Brainers</a>
      </nav>
    </header>
  `,
})
export class Navbar {}
