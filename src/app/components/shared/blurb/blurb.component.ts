import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blurb',
  templateUrl: './blurb.component.html',
  styleUrls: ['./blurb.component.css']
})
export class BlurbComponent implements OnInit {

  @Input() imgsrc: string;
  @Input() imgType: string;
  @Input() title: string;
  @Input() desc: string;

  constructor() { 
    this.imgsrc = "assets/img/img-why.png";
    this.imgType = "img";
    this.title = "Title blurb";
    this.desc = "Description blurb";
  }

  ngOnInit(): void {
  }

}
