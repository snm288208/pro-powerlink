import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandrdpricereportComponent } from './standrdpricereport.component';

describe('StandrdpricereportComponent', () => {
  let component: StandrdpricereportComponent;
  let fixture: ComponentFixture<StandrdpricereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandrdpricereportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandrdpricereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
