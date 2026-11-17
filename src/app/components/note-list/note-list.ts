import {Component, input} from '@angular/core';
import {Note} from '../../data/note.model';
import {RouterLink} from '@angular/router';
import {HlmCardImports} from '@spartan-ng/helm/card';

/**
 * Composant de PRESENTATION : il affiche la liste qu'on lui donne, rien de plus.
 * Les données Note arrivent par le composant parent (NoteSearch)
 */
@Component({
  imports: [RouterLink, HlmCardImports],
  selector: 'app-note-list',
  template: `
    <ul class="flex flex-col gap-3">
      <!-- track permet a angular de reconnaitre chaque note d'un affichage a l'autre via l'id d'une note. -->
      @for (note of notes(); track note.id){
        <li>
          <!--// Construit l'url /notes/1 -->
          <a [routerLink]="['/notes', note.id]" class="block rounded-xl">
            <article hlmCard class="hover:bg-muted/50 transition-colors">
              <div hlmCardHeader>
                <h2 hlmCardTitle>{{ note.title }}</h2>
                <p hlmCardDescription class="line-clamp-2">{{ note.content }}</p>
              </div>
            </article>
          </a>
        </li>
      }
    </ul>
  `,
})

export class NoteList {
  // Crée une entrée, c'est le parent qui donne la valeur en écrivant, [notes] = ...
  //                    required signifie l'oubli entraine une erreur de compilation
  //                          => l'oubli de qui du parent ? de celui qui l'utilise ?

  readonly notes= input.required<Note[]>();
}
