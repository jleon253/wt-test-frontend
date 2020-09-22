import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloqtext',
  templateUrl: './bloqtext.component.html',
  styleUrls: ['./bloqtext.component.css']
})
export class BloqtextComponent implements OnInit {

  @Input() title: string;
  @Input() paragraph: string;
  @Input() align: string;
  
  constructor() {
    this.title = 'Default title';
    this.paragraph = 'Default paragraph';
    this.align = 'center';
  }

  ngOnInit(): void {
  }

}
