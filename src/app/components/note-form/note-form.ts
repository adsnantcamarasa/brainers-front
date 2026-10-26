import { Component } from '@angular/core';
import {HlmButton} from '@spartan-ng/helm/button';
import {HlmInput} from '@spartan-ng/helm/input';
import {HlmLabel} from '@spartan-ng/helm/label';


@Component({
  imports: [
    HlmButton,
    HlmInput,
    HlmLabel
  ],

  selector: 'app-note-form',
  template: `<h1 class="text-3xl font-bold tracking-tight">Nouvelle note</h1>

    <form class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <label hlmLabel for="note-title">Titre</label>
        <input hlmInput id="note-title" type="text" placeholder="Ex : Boucler sur une Map" />
      </div>

      <div class="flex flex-col gap-2">
        <label hlmLabel for="note-content">Contenu</label>
        <textarea
          hlmTextarea
          id="note-content"
          rows="10"
          placeholder="Une notion = un note. Garde la courte"
        ></textarea>
      </div>

      <div class="flex justify-end gap-2">
        <button hlmBtn variant="outline" type="button">Annuler</button>
        <button hlmBtn type="submit">Enregistrer</button>
      </div>
    </form>`,
})
export class NoteForm {}
