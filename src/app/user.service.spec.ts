import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should allow users to register', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.register).toBeTruthy();
  });

  it('should allow users to login', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.login).toBeTruthy();
  });

  it('should allow users to have a favorites list', () => {
    const service: UserService = TestBed.get(UserService);
    const favorite = {
      userId: 1,
      heroId: 2
    };
    service.favorites.push(favorite);

    expect(service.getFavoritesList(1)).toEqual([favorite.heroId]);
  });

  it('should Add favorites',() => {
    const service: UserService = TestBed.get(UserService);
    const favorite = {
      userId: 1,
      heroId: 2
    };
    service.favorites.push(favorite);
    service.addFavorite(1, 3);
    expect(service.getFavoritesList(1)).toEqual([2, 3]);
  });
});
