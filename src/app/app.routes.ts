import { Routes } from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {NoteCreatePage} from './pages/note-create-page/note-create-page';
import {NoteDetailPage} from './pages/note-detail-page/note-detail-page';

export const routes: Routes = [
  {path: '', component : HomePage},
  {path: 'notes/new', component : NoteCreatePage},
  {path: 'notes/:id/edit', component : NoteCreatePage},
  {path: 'notes/:id', component : NoteDetailPage}, // {id} detail d'une page!
  {path:  '**', redirectTo: ''},
];
