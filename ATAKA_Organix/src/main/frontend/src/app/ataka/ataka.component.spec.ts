import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtakaComponent } from './ataka.component';

describe('AtakaComponent', () => {
  let component: AtakaComponent;
  let fixture: ComponentFixture<AtakaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtakaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
