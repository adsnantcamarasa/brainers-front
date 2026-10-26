import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteCreatePage } from './note-create-page';

describe('NoteCreatePage', () => {
  let component: NoteCreatePage;
  let fixture: ComponentFixture<NoteCreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteCreatePage],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteCreatePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
