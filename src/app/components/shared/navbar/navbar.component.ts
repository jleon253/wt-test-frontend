import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    let menu = document.getElementById('wt-menu');
    let menuIcon = document.getElementById('wt-navbar__menuIcon');
    menu.classList.toggle('open-menu');
    menuIcon.classList.toggle('close');
  }

}
