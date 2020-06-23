import { Component, OnInit, Input } from '@angular/core';
import { SearchModel } from 'src/app/models/search_model';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {
  @Input() suggestion: SearchModel;

  constructor() { }

  ngOnInit(): void {
  }

}
