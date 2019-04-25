import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SearchFormComponent } from '../search-form/search-form.component';
import { HeroService } from '../hero.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent
       ],
       providers: [
         {
           provide: HeroService,
           useClass: class {
             displayedHeroList = [
               {
                 ID: 1,
                 Name: 'Spider Man',
                 Publisher: 'Marvel Comics'
               }
             ]
           }
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

  it('should have nav Logo',()=>{
    const el= fixture.nativeElement;
    expect(el.querySelector('.brand-logo').innerText).toContain('Hero Book');  
  });

  it('should have a search bar',()=>{
     const el=fixture.nativeElement;
     expect(el.querySelector('input').placeholder).toEqual('Search');
  });

  it('should have a hero list', () => {
    const el = fixture.nativeElement;
    expect(parseInt(el.querySelector('.hero-id').innerText)).toEqual(1);
    expect(el.querySelector('.hero-name').innerText).toEqual('Spider Man');
    expect(el.querySelector('.hero-publisher').innerText).toEqual('Marvel Comics');
  });

});

