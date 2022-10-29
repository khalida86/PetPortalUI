import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCareInfoComponent } from './show-care-info.component';

describe('ShowCareInfoComponent', () => {
  let component: ShowCareInfoComponent;
  let fixture: ComponentFixture<ShowCareInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCareInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCareInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
