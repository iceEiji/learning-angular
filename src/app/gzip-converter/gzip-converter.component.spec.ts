import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GzipConverterComponent } from './gzip-converter.component';

describe('GzipConverterComponent', () => {
  let component: GzipConverterComponent;
  let fixture: ComponentFixture<GzipConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GzipConverterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GzipConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
