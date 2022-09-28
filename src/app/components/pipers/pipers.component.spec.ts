import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipersComponent } from './pipers.component';

describe('PipersComponent', () => {
  let component: PipersComponent;
  let fixture: ComponentFixture<PipersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
