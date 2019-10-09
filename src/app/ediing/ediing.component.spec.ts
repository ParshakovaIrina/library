import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiingComponent } from './ediing.component';

describe('EdiingComponent', () => {
  let component: EdiingComponent;
  let fixture: ComponentFixture<EdiingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdiingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdiingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
