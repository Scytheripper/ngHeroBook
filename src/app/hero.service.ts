import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) {

  }
  
  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>('http://herobookapi.herokuapp.com/api/v1/heroes/');
  } 

  getHeroById(heroId){
    return this.http.get<Hero>(`http://herobookapi.herokuapp.com/api/v1/heroes/${heroId}`);
  }
}
