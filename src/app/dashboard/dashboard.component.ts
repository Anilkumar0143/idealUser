// dashboard.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserActivityService } from '../services/useractivitys.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private activitySubscription: any;

  constructor(private inactivityService: UserActivityService, private router: Router) {}

  ngOnInit(): void {
    console.log('ViewVideosComponent initialized.');
      this.inactivityService.startInactivityTimer();
    this.activitySubscription = this.inactivityService.getUserInactivityStatus().subscribe((isInactive) => {
      if (isInactive) {
        // Perform logout logic here, e.g., clearing tokens, user data, etc.
        this.router.navigate(['/login']); // Redirect to login page
      }
    });
  }

  ngOnDestroy(): void {
    this.inactivityService.userLoggedIn = false;
    this.inactivityService.unsubscribeFromActivityEvents();
    if (this.activitySubscription) {
      this.activitySubscription.unsubscribe();
    }
  }
}
