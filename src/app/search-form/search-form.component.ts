import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  heroList: Hero[] = [];

  @Input()
  udpateHeroList;

  @Input()
  heroService;

  searchForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      query: [[''], Validators.required],
    });
  }


  searchHeroes() {
    // this.heroService.getHeroes()
    // .subscribe(heroes => {
    //   this.udpateHeroList((heroes.filter(hero => hero.name.includes(this.searchForm.controls.query.value))));
    // });

    this.udpateHeroList(this.searchForm.controls.query.value);

    //heroList = heroList.filter((hero) => hero.name.includes(this.searchForm.controls.query.value));

    // if(this.heroList.length === 0) {
    //   console.log('No results');
    //   return 'No results found...';
    // }
    // else this.udpateHeroList(this.heroList);
    // console.log(this.heroList);
  }
}
