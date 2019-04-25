import { Injectable } from '@angular/core';
import * as HEROS from './data/hero_info.json';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  displayedHeroList = [];

  constructor() {
    this.displayedHeroList = HEROS.default;
   }

   search(heroName: string) {
    //this.displayedHeroList = HEROS.default;
    this.displayedHeroList = this.displayedHeroList.filter(hero => hero.Name = heroName);
    return this.displayedHeroList;
   }

}
