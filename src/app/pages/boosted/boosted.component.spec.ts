import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostedComponent } from './boosted.component';

describe('BoostedComponent', () => {
  let component: BoostedComponent;
  let fixture: ComponentFixture<BoostedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
