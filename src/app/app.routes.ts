import { Routes } from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {NoteCreatePage} from './pages/note-create-page/note-create-page';
import {NoteDetailPage} from './pages/note-detail-page/note-detail-page';

export const routes: Routes = [
  {path: '', component : HomePage},
  {path: 'create', component : NoteCreatePage},
  {path: 'detail', component : NoteDetailPage},
  {path:  '**', redirectTo: ''},
];
