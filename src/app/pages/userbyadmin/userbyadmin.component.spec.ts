import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbyadminComponent } from './userbyadmin.component';

describe('UserbyadminComponent', () => {
  let component: UserbyadminComponent;
  let fixture: ComponentFixture<UserbyadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserbyadminComponent]
    });
    fixture = TestBed.createComponent(UserbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
