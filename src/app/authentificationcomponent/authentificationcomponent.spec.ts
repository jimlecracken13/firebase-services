import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Authentificationcomponent } from './authentificationcomponent';

describe('Authentificationcomponent', () => {
  let component: Authentificationcomponent;
  let fixture: ComponentFixture<Authentificationcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Authentificationcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Authentificationcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
