import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegistrationPortfolioComponent } from './login-registration-portfolio.component';

describe('LoginRegistrationPortfolioComponent', () => {
  let component: LoginRegistrationPortfolioComponent;
  let fixture: ComponentFixture<LoginRegistrationPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegistrationPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegistrationPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
