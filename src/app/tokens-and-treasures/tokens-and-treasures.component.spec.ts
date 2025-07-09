import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensAndTreasuresComponent } from './tokens-and-treasures.component';

describe('TokensAndTreasuresComponent', () => {
  let component: TokensAndTreasuresComponent;
  let fixture: ComponentFixture<TokensAndTreasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TokensAndTreasuresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokensAndTreasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
