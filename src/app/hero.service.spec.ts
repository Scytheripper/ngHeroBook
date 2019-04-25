import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });

  it('display filter heroes based on given string', () => {
    const service: HeroService = TestBed.get(HeroService);
    let hero = {id: 1, name: 'Spider Man'};
    service.displayedHeroList = [hero];
    expect(service.search('Spider Man')).toEqual([{ID: 1, Name: 'Spider Man'}]);
  });
});
