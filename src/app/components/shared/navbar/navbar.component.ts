import { Component, OnInit, AfterContentChecked } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterContentChecked {

  menu: any;
  menuIcon: any;
  showMenu: boolean = true;

  constructor(private _router: Router) { 
    console.log(_router);
  }

  ngOnInit(): void {
    this.menu = document.getElementById('wt-menu');
    this.menuIcon = document.getElementById('wt-navbar__menuIcon');
  }

  ngAfterContentChecked(): void{
    this.showMenu = (this._router.url === "/") ? true : false;
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
