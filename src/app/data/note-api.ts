import {inject, Injectable, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Note, NoteId, NoteRequest} from './note.model';
import {Observable} from 'rxjs';

@Service()
export class NoteApi{
  private readonly http = inject(HttpClient);
  private readonly baseUrl: string = '/api/notes';

  /**
   * GET /api/notes?title=...  →  NoteController.getAll(search)
   * Renvoie les notes dont le titre contient le texte (sans tenir compte de la casse).
   * Titre vide : GET /api/notes, sans paramètre → toutes les notes.
   */
  searchByTitle(query: string): Observable<Note[]>{
    const title = query.trim();
    const param : Record<string, string> = title == '' ? {} : {title}; // J'iamgine que par rapport a mon back c'est ça or {param} ne fonctionne pas et d'ailleur je comprend pas c'est un objet alors que param est e contenu du body ?
    return this.http.get<Note[]>(this.baseUrl, {params: param}); // param est le corps du body or params doit être dans l'url, dans mon back @RequestParam(value = "title", required = false)
  }

  /**
   * GET /api/notes/{id}  →  NoteController.getById(id)
   * Erreur HTTP 404 si la note n'existe pas.
   */
  getById(id: NoteId): Observable<Note>{
    return this.http.get<Note>(`${this.baseUrl}/${id}`);
  }

  /**
   * POST /api/notes  →  NoteController.create(noteRequest)
   * Réponse 201 avec la note créée. Erreur HTTP 409 si le titre existe déjà.
   */
  create(request : NoteRequest): Observable<Note>{
    return this.http.post<Note>(this.baseUrl, request); // Ici je dois bien transmettre le body.
  }

  // Question :
  // 1. Pourquoi on type le put/post/get entre chevrons <> car c'est une réponse d'api et elle doit correspondre a un type TS déclaré dans note.model ?
  /**
   * PUT /api/notes/{id}  →  NoteController.update(id, noteRequest)
   * Réponse 200 avec la note modifiée. Erreur HTTP 404 si la note n'existe pas.
   */
  update(id : NoteId, request : NoteRequest): Observable<Note>{
    return this.http.put<Note>(`${this.baseUrl}/${id}`, request);
  }

  // Ici j'imagine qu'on retourne un observable pour savoir quand la requête est terminé ou alors, pour ne pas mettre en pause le programme ?
  /**
   * DELETE /api/notes/{id}  →  NoteController.delete(id)
   * Réponse 204 sans contenu. Erreur HTTP 404 si la note n'existe pas.
   */
  delete(id: NoteId): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }
}

