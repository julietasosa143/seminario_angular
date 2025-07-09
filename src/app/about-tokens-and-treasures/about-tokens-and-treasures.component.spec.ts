import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTokensAndTreasuresComponent } from './about-tokens-and-treasures.component';

describe('AboutTokensAndTreasuresComponent', () => {
  let component: AboutTokensAndTreasuresComponent;
  let fixture: ComponentFixture<AboutTokensAndTreasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutTokensAndTreasuresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTokensAndTreasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
