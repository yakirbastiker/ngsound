import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['../../../../scss/components/_signUp.scss']
})
export class SignUpComponent implements OnInit {

  faUser = faUser;
  faLock = faLock;
  faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit() {
  }

}
