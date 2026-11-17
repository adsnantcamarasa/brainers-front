import {Component, inject, OnInit} from '@angular/core';
import {NoteForm} from '../../components/note-form/note-form';
import {ActivatedRoute} from '@angular/router';

@Component({
  imports: [NoteForm],
  selector: 'app-note-create-page',
  templateUrl: './note-create-page.html',
})
export class NoteCreatePage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  protected noteId: string | null = null;

  ngOnInit(): void {
        this.noteId = this.route.snapshot.paramMap.get('id');
  }


}
