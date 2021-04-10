import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyanimationComponent } from './myanimation.component';

describe('MyanimationComponent', () => {
  let component: MyanimationComponent;
  let fixture: ComponentFixture<MyanimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyanimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
