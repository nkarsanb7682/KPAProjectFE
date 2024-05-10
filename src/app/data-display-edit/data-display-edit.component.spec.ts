import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDisplayEditComponent } from './data-display-edit.component';

describe('DataDisplayEditComponent', () => {
  let component: DataDisplayEditComponent;
  let fixture: ComponentFixture<DataDisplayEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataDisplayEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataDisplayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
