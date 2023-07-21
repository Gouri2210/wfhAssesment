import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIDataComponent } from './apidata.component';

describe('APIDataComponent', () => {
  let component: APIDataComponent;
  let fixture: ComponentFixture<APIDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APIDataComponent]
    });
    fixture = TestBed.createComponent(APIDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
