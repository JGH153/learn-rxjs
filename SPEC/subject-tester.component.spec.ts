import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTesterComponent } from './subject-tester.component';

describe('SubjectTesterComponent', () => {
  let component: SubjectTesterComponent;
  let fixture: ComponentFixture<SubjectTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
