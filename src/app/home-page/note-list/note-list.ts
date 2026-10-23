import { Component } from '@angular/core';
import {Note} from './note/note';

@Component({
  imports: [Note],
  selector: 'app-note-list',
  template: `
    <ul class="flex flex-col gap-3">
    <li>
      <app-note />
    </li>
  </ul>`,
})
export class NoteList {}
