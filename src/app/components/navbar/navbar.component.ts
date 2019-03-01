import { Component, OnInit } from '@angular/core';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../../../scss/components/_navbar.scss']
})
export class NavbarComponent implements OnInit {

  faList = faList;
  faHeart = faHeart;
  isRegistered: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
