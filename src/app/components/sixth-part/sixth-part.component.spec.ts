import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthPartComponent } from './sixth-part.component';

describe('SixthPartComponent', () => {
  let component: SixthPartComponent;
  let fixture: ComponentFixture<SixthPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
