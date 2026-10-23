import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-note',
  template: `
    <article hlmCard>
        <div hlmCardHeader>
            <h2 hlmCardTitle>Note title</h2>
        </div>
        <p hlmCardContent class="text-muted-foreground">Note content</p>
    </article>
  `,
})
export class Note {}
