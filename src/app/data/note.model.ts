/** Alias : L'identifiant d'une note (un Long côté Java). */
export type NoteId = number;

/** Une note, telle que le back la renvoie (NoteResponse côté Java) **/
export interface Note{
  id: number;
  title: string;
  content: string;
  createdAt: string;
  lastUpdateAt : string;
}

/** Ce qu'on envoie au back pour créer ou modifier une note (NoteRequest côté Java). */
export interface NoteRequest{
  title: string;
  content: string;
}
