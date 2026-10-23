import { Component } from '@angular/core';
import {Note} from './note/note';

@Component({
  imports: [Note],
  selector: 'app-note-list',
  styleUrl: './note-list.css',
  templateUrl: './note-list.html',
})
export class NoteList {}
