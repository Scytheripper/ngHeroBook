import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedHeroes = [];
  query = '';
  constructor(private heroService: HeroService) {

   }

  updateDisplayedHeroes = (query) => {
    if(query === ''){
      this.heroService.getHeroes().subscribe(heroes => this.displayedHeroes = heroes);
    }
    else this.displayedHeroes = this.displayedHeroes.filter(hero => hero.name.includes(query));
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => this.displayedHeroes = heroes);
  }

}
