import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
  imports: [HlmButtonImports, HlmInputImports, HlmLabelImports],
  selector: 'app-note-search',
  template: `
    <form class="flex flex-col gap-2">
      <label hlmLabel for="search">Rechercher une note</label>
      <div class="flex gap-2">
        <input hlmInput id="search" type="search" placeholder="Ex : signals, routing…" />
        <button hlmBtn type="submit">Rechercher</button>
      </div>
    </form>
  `
})
export class NoteSearch {}


