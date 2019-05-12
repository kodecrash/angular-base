import { Component, OnInit } from '@angular/core';
import { User } from './models';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-framework';
  currentUser: User;
  isLoggedIn = false;

  constructor(private authService: AuthenticationService,
    private router: Router) {

    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
      if (!this.currentUser) {
        this.router.navigate(['login']);
      }
    });
  }

  ngOnInit() {

  }
}
