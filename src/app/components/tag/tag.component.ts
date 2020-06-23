import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  @Input() tag: number;

  constructor() {}

  ngOnInit(): void {
  }

  getTagClass(value: number):string {
    if (value > 6) {
      return "excellent"
    }else if(value > 3 && value <= 6 ){
      return 'moderate'
    }else{
      return 'poor'
    }
  }
}
