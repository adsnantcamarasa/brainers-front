import {Component, inject, input, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {NoteApi} from '../../data/note-api';
import {Note, NoteRequest} from '../../data/note.model';

import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmTextareaImports } from '@spartan-ng/helm/textarea';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  imports: [
    ReactiveFormsModule,
    HlmButtonImports,
    HlmInputImports,
    HlmLabelImports,
    HlmTextareaImports
  ],
  selector: 'app-note-form',
  templateUrl: './note-form.html',
})

export class NoteForm implements OnInit{
  readonly noteId  = input<string | null>();
  private noteDeprecated : Note | undefined
  protected readonly note = signal<Note | null>(null);

  // 1. On injecte notre service API pour envoyer les données plus tard.
  private readonly noteApi = inject(NoteApi);
  // 2. On injecte le Routeur pour pouvoir l'utiliser dans nos méthodes.
  private readonly router = inject(Router);

  // 2. On crée une variable appelée form. Elle représente un formulaire qui contient un champ title et un champ content.
  protected readonly form: FormGroup = new FormGroup({
    // un FormControl est la représentation d'un champ template. Angular a besoin d'un objet pour surveiller ce champs.
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    content : new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  protected onCancel(event : Event){
    event.preventDefault();
    this.router.navigate(['/notes'])
  }
  protected onSubmit(): void{
    if(this.form.invalid){
      this.form.markAllAsTouched(); // Force l'affichage visuel des erreurs.
      return;
    }

    const request : NoteRequest = {
      title : this.form.controls['title'].value,
      content : this.form.controls['content'].value
    }

    if(this.noteId()){
      this.noteApi.update(Number(this.noteId()), request).subscribe({
        next : (savedNote) => {
          console.log('Succès ! La note a été enregistrée :', savedNote);
          this.router.navigate(['/notes', savedNote.id])
        },

        error : (error: HttpErrorResponse) => {console.log('L\'enregistrement a échoué. Vérifie que le back Spring est démarré, puis réessaie.')}
      })
    } else {
      this.noteApi.create(request).subscribe({
        next : (savedNote) => {
          console.log('Succès ! La note a été enregistrée :', savedNote);
          this.router.navigate(['/notes', savedNote.id])
          },

        error : (error: HttpErrorResponse) => {console.log('L\'enregistrement a échoué. Vérifie que le back Spring est démarré, puis réessaie.')}
      })
    }
  }

  ngOnInit(): void{
    if(typeof this.noteId() === "string"){
      this.noteApi.getById(Number(this.noteId())).subscribe({
        next: (note) => {
          this.note.set(note);
          this.form.patchValue({
            title: note.title,
            content: note.content
          });
        },
        error: (err: Error) => {
          console.log("Erreur API " + err.message)}
      })
    }
  }
}
