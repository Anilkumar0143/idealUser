// login.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserActivityService } from 'src/app/services/useractivitys.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private inactivityService: UserActivityService, private router: Router) {}
  ngOnInit(): void {
    // Pause inactivity timer during login
    this.inactivityService.userLoggedIn = false;
    this.inactivityService.pauseInactivityTimer();
  }

  ngOnDestroy(): void {
    // Re-enable event listeners when the component is destroyed
    this.inactivityService.userLoggedIn = true;
  }

  onSubmit(): void {
    this.inactivityService.userLoggedIn = true;
    this.inactivityService.updateActivityTimestamp();
    this.inactivityService.isUserInactive$.next(false);
    // Redirect to some other component after successful login
    this.router.navigate(['/videos']);
  }
}
