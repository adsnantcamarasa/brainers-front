import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
  imports: [HlmButtonImports, HlmInputImports, HlmLabelImports],
  selector: 'app-note-search',
  styleUrl: './note-search.css',
  templateUrl: './note-search.html',
})
export class NoteSearch {}
