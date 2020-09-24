import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  elements: any = [];
  windowHeight: any;

  ngOnInit(): void {
    this.initial();
    this.checkPosition();
    window.addEventListener('scroll', this.initial);
    window.addEventListener('scroll', this.checkPosition);
  }

  initial() {
    this.elements = document.querySelectorAll('.hidden');
    this.windowHeight = window.innerHeight;
  }

  checkPosition() {
    if (this.elements.length > 0) {
      for (let i = 0; i < this.elements.length; i++) {
        let element = this.elements[i];
        let positionFromTop = this.elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - this.windowHeight <= 0) {
          element.classList.remove('hidden');
          element.classList.add('animate__animated');
          element.classList.add('animate__backInDown');
        }
      }
    }
  }
}
