import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  id: string = ''
  hero: Hero

  constructor(private route: ActivatedRoute, private heroService: HeroService) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(){
    this.route.params.subscribe(data => this.id = data.id);

    this.heroService.getHeroById(this.id).subscribe(hero => this.hero = hero);
  }

}
