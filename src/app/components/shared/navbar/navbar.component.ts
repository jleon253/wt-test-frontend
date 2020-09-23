import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu: any;
  menuIcon: any;

  constructor() { }

  ngOnInit(): void {
    this.menu = document.getElementById('wt-menu');
    this.menuIcon = document.getElementById('wt-navbar__menuIcon');
  }

  toggleMenu() {
    this.menu.classList.toggle('open-menu');
    this.menuIcon.classList.toggle('close');
  }

  scrollView(section: string) {
    let element = document.getElementById(section);
    window.scroll({top: element.offsetTop});
    this.toggleMenu();
  }

}
