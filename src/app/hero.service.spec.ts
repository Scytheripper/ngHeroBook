import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';


class MockHeroService{
  getHeroes() {
    return([
      { 
        id: 1,
        name: 'Super Man'
      }
    ]);
  }

  getHero(id) {
    if(id === 1){
      return { 
        id: 1,
        name: 'Super Man'
      };
    }
    else {
      return {};
    }
  }

  searchHeroes(query: string) {
    return [
      {
        id: 1,
        name: 'Super Man'
      }
    ]
  }
}

let service: MockHeroService;

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new MockHeroService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list of heroes',()=>{
    //excercise
    let actual = service.getHeroes();
    //assert
    expect(actual).toEqual([{id: 1, name: 'Super Man'}]);
  });

  it('should return single hero with given ID',()=>{
    expect(service.getHero(1)).toEqual({id: 1, name: 'Super Man'});
  });

  it('should return heroes with name including query', () => {
      expect(service.searchHeroes('Super Man')).toEqual([{id: 1, name: 'Super Man'}]);
  });
});
