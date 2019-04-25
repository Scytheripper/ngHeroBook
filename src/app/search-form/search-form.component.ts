import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;
  searchResults = [];
  constructor(private fb: FormBuilder) { 
    
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      name: [[''], Validators.required],
    });
  }


  getSearchResults() {
    if(this.searchResults.length === 0) {
      return 'No results found...';
    }
    else return this.searchResults
  }
}
