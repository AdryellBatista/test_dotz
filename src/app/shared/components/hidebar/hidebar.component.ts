import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hidebar',
  templateUrl: './hidebar.component.html',
  styleUrls: ['./hidebar.component.scss']
})
export class HidebarComponent implements OnInit {

  isCollapsed = true;

  userLoged = JSON.parse(localStorage.getItem('USER'));
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  get getUserloged () {
    return JSON.parse(localStorage.getItem('USER'));
  }
  logout() {
    localStorage.clear();
    this.goTo('/auth/login');
  }

  goTo(route) {
    this.router.navigate([route]);
  }
}
