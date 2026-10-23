import { Component } from '@angular/core';
import {NoteSearch} from './note-search/note-search';
import {NoteList} from './note-list/note-list';

@Component({
  imports: [NoteSearch, NoteList],
  selector: 'app-home-page',
  template: `
    <section class="flex flex-col gap-6">
    <div class="flex flex-col gap-1">
      <h1 class="text-3xl font-bold tracking-tight">Notes</h1>
      <p class="text-muted-foreground">
        Retrouve une notion en quelques secondes, ou ajoute-en une nouvelle.
      </p>
    </div>

    <div class="flex items-end gap-2">
      <app-note-search class="flex-1" />
      <a hlmBtn variant="outline" routerLink="/notes/new">Créer</a>
    </div>

    <app-note-list />
  </section>
  `,
})
export class HomePage {}
