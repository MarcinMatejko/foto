import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotBuildPageComponent } from './not-build-page.component';

describe('NotBuildPageComponent', () => {
  let component: NotBuildPageComponent;
  let fixture: ComponentFixture<NotBuildPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotBuildPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotBuildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
