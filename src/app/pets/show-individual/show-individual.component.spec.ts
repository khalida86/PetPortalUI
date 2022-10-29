import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIndividualComponent } from './show-individual.component';

describe('ShowIndividualComponent', () => {
  let component: ShowIndividualComponent;
  let fixture: ComponentFixture<ShowIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowIndividualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
