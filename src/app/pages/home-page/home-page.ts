import { Component } from '@angular/core';
import {NoteList} from '../../components/note-list/note-list'
import {RouterLink} from '@angular/router';
import {Note} from '../../data/note.model';
import {NoteSearch} from '../../components/note-search/note-search';
import {HlmButtonImports} from '@spartan-ng/helm/button';

@Component({
  imports: [RouterLink, HlmButtonImports, NoteSearch],
  selector: 'app-home-page',
  templateUrl: `home-page.html`,
})
export class HomePage {}
