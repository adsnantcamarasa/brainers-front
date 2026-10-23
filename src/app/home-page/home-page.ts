import { Component } from '@angular/core';
import {NoteSearch} from './note-search/note-search';
import {NoteList} from './note-list/note-list';

@Component({
  imports: [NoteSearch, NoteList],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage {}
