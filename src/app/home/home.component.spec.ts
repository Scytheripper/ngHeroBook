import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SearchFormComponent } from '../search-form/search-form.component';
import { HeroService } from '../hero.service';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  class MockHeroService{
    getHeroes(){ 
      return of([
       {
         id: 1,
         name: 'Spider Man',
         publisher: 'Marvel Comics'
       }
     ]);
   }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        SearchFormComponent
       ],
       imports: [
        FormsModule,
        ReactiveFormsModule
       ],
       providers: [
         {
           provide: HeroService,
           useClass: MockHeroService
          }
        ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should have nav Logo',() => {
    const el= fixture.nativeElement;
    expect(el.querySelector('.brand-logo').innerText).toContain('Hero Book');  
  });

  xit('should have a search bar',() => {
     const el=fixture.nativeElement;
     expect(el.querySelector('input').placeholder).toEqual('Search');
  });

  xit('should have a hero list', () => {
    const el = fixture.nativeElement;
    expect(el.querySelector('.hero-name').innerText).toEqual('Spider Man');
    expect(el.querySelector('.hero-publisher').innerText).toEqual('Marvel Comics');
  });

});

