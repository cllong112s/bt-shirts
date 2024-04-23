import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceCardComponent } from './commerce-card.component';

describe('CommerceCardComponent', () => {
  let component: CommerceCardComponent;
  let fixture: ComponentFixture<CommerceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommerceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommerceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
