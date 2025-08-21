import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accueilcomponent } from './accueilcomponent';

describe('Accueilcomponent', () => {
  let component: Accueilcomponent;
  let fixture: ComponentFixture<Accueilcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accueilcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accueilcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
