import { Component } from '@angular/core';
import {NoteSearch} from '../../components/note-search/note-search';
import {NoteList} from '../../components/note-list/note-list'
import {RouterLink} from '@angular/router';

@Component({
  imports: [NoteSearch, NoteList, RouterLink],
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
      <a hlmBtn variant="outline" routerLink="/create">Créer</a>
    </div>

    <app-note-list />
  </section>
  `,
})
export class HomePage {}
