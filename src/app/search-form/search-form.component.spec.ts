import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from './search-form.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFormComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a search form', () => {
    component.ngOnInit();
    expect(component.searchForm).toBeTruthy();
  });
  
  it('should require query to submit form', () => {
    component.ngOnInit();
    component.searchForm.controls.name.setValue('john');
    expect(component.searchForm.valid).toBeTruthy();  
  });
  
  it('should validate form', () => {
      
      
      component = new SearchFormComponent(new FormBuilder());
      component.ngOnInit();
      component.searchForm.controls.name.setValue('');   //MAKE IT INVALID wll refactor
      expect(component.searchForm.valid).toBeFalsy();
  });
  
  it('should return search results', () => {
    component.searchResults = [1, 2, 3]
    expect(component.getSearchResults()).toEqual([1, 2, 3]);  
  });
  
  it('should show message if no results found', () => {
    component.searchResults = [];
    expect(component.getSearchResults()).toEqual('No results found...');  
  });

});
