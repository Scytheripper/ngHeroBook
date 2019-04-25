import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  favorites = [];
  constructor() { }

  register() {
    
  }

  login() {

  }

  getFavoritesList(userId){
    return this.favorites.filter(favorite => favorite.userId === userId).map(favorite => favorite.heroId);
  }
  
  addFavorite(userId,heroId){
    this.favorites.push({userId,heroId});
  }

}
