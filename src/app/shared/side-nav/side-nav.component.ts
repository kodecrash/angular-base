import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {
  @ViewChild('sideNav') sideNav: ElementRef;
  subscription: Subscription;

  constructor(private navService: NavService,
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) {
    this.subscription =  this.navService.onSideNavToggle().subscribe((data) => {
     // this.sideNav.nativeElement.classList.toggle('actve');
     console.log('subscription recieved');
     console.log(data);
      if (data && data.navData) {
        this.sideNav.nativeElement.classList.remove('active');
      } else {
        this.sideNav.nativeElement.classList.add('active');
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
     // unsubscribe to ensure no memory leaks
     this.subscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  getActiveLink(linkname: string) {
    // console.log(this.route.url.value[0].path);
  }

}
