import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backtotop',
  template: `
    <a (click)="scrollToTop()" class="wt-backToTop__link" aria-label="Scroll to Top">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><g transform="translate(-473.75 1235.341) rotate(180)"><g transform="translate(-503.75 1205.341)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"><circle cx="15" cy="15" r="15" stroke="none"/><circle cx="15" cy="15" r="14.5" fill="none"/></g><path d="M-485.319,1214.159l-7.4,7.4-7.4-7.4" transform="translate(3.966 5.497)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g></svg>
    </a>
  `,
  styleUrls: ['./backtotop.component.css']
})
export class BacktotopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop() { 
      window.scrollTo(0, 0); 
  } 

}
