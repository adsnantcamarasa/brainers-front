import {Component, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import {HlmCardImports} from '@spartan-ng/helm/card';
import {NoteApi} from '../../data/note-api';
import {Note} from '../../data/note.model';
import {routes} from '../../app.routes';
import {HttpErrorResponse} from '@angular/common/http';
import {HlmButton} from '@spartan-ng/helm/button';

type status = "init" | "notValidId" | "loading" | "notFound" | "success" | "failed" ;

@Component({
  imports: [DatePipe, RouterLink, HlmCardImports, HlmButton],
  selector: 'app-note-detail-page',
  templateUrl: './note-detail-page.html',
})
export class NoteDetailPage implements OnInit{
  private readonly noteApi = inject(NoteApi);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);


  protected readonly note = signal<Note | null>(null);
  noteStatus: status = "init";


  ngOnInit(): void {

    // API call
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(!Number.isInteger(id) || id <= 0){
      this.noteStatus = 'notValidId';
    }

    this.noteApi.getById(id).subscribe({
      next: (note) => {
        this.note.set(note);
        this.noteStatus = "success";
      },

      error: (error : HttpErrorResponse) => {
        if(error.status === 404){
          this.noteStatus = "notFound";
        } else {
          this.noteStatus = "failed";
        }
      }
    });
  }

  protected onDelete(event : Event){
    event.preventDefault();
    const id: string | null = this.route.snapshot.paramMap.get('id')
    if(id != null){
      this.noteApi.delete(Number(id)).subscribe({
         next: () => {
           console.log("Note deleted!")
           this.router.navigate(['/notes']);
         },
         error: (error : HttpErrorResponse) => {
           console.log("Cannot removed note" + error.status)
         }
      })
    }
  }

  protected onUpdate(){
    // 1. Option 1 => Naviguer directement sur la route et laisser mon composant appelé mon backend.
    // 2. Option 2 => Récupérer la note est l'envoyer en même temps que la redirection ? j'imagine que cela est possible.

    const note = this.note();
    this.router.navigate(['/notes', this.route.snapshot.paramMap.get('id'), 'edit']);
  }
}
