import { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { NoteApi } from '../../data/note-api';
import { Note } from '../../data/note.model';
import { NoteList } from '../note-list/note-list';
import {SearchState} from './search-state';

@Component({
  imports: [ReactiveFormsModule, HlmButtonImports, HlmInputImports, HlmLabelImports, NoteList],
  selector: 'app-note-search',
  templateUrl: './note-search.html',
})

export class NoteSearch{
  private readonly noteApi = inject(NoteApi);

  // FormControl : objet qui représente un champ de formulaire.
  // html -> <input> | typescript -> FormControl équivalent
  // ils sont relié dans le template : <input [formControl]="searchControl" />
  // A partir de la les deux sont synchronisé tout seuls, "java" dans l'input searchControl.value vaut "java"
  protected readonly searchControl = new FormControl('', {nonNullable : true});

  // signal(...) créer une boite qui sera tracker par les templates(html) qu'ils l'utilisent.(appel de fonction)
  // <Note[]> le type du contenu de la boite
  // ( [] ) la valeur de départ le param de la fonction. un tableau vide.
  protected readonly notes = signal<Note[]>([]); //

  // Ce que l'écran affiche. Chaque signal previent le template quand il change, mais comment ils se remettent à 0
  protected readonly status = signal(SearchState.Init)

  protected search(event: Event):void {
    // évite le rechargement de la page
    event.preventDefault()
    this.status.set(SearchState.Loading);

    // .subscribe lance l'observer sans lui aucune requête est lancée.
    // il récupère le retour de l'appel API et set dans notre tableau de notes les notes récupérées.
    this.noteApi.searchByTitle(this.searchControl.value).subscribe({
      next: (notes) => {
        this.notes.set(notes);
        if(this.notes().length === 0){
          this.status.set(SearchState.Empty);
        } else{
          this.status.set(SearchState.Success);
        }
      },

      error: () => {
        this.status.set(SearchState.Error);
      }
    });
  }

  protected readonly SearchState = SearchState;
}
