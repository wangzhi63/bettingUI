import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingJudgementsComponent } from './pending-judgements.component';

describe('PendingJudgementsComponent', () => {
  let component: PendingJudgementsComponent;
  let fixture: ComponentFixture<PendingJudgementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingJudgementsComponent]
    });
    fixture = TestBed.createComponent(PendingJudgementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
