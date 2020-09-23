import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blockplus',
  templateUrl: './blockplus.component.html',
  styleUrls: ['./blockplus.component.css']
})
export class BlockplusComponent implements OnInit {

  @Input() color: string;
  fill: string;
  
  constructor() {
  }

  ngOnInit(): void {
    this.fill = (this.color === 'orange') ? 'rgb(236,78,32)' : 'rgb(255,255,255)';
  }

}
