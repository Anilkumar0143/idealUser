// useractivitys.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserActivityService {
  public lastActivityTimestamp: any;
  public inactivityThreshold: number = 150000; // 150 seconds in milliseconds
  public inactivityTimer: any;
  public isUserInactive$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isTimerPaused: boolean = false;
  public activitySubscription: any;

  public userLoggedIn: boolean = true;  

  constructor() {
    this.setupEventListeners();
    
    setTimeout(() => {
      this.lastActivityTimestamp = Date.now();
      this.startInactivityTimer();
    }, 2000); // Delay 2 seconds before setting userLoggedIn to true
  }
  
  
  public onUserActivity(): void {
    this.updateActivityTimestamp();
    this.resumeInactivityTimer();
  }

  public pauseInactivityTimer(): void {
    this.isTimerPaused = true;
  }

  public resumeInactivityTimer(): void {
    this.isTimerPaused = false;
    this.restartInactivityTimer();
  }
  public setupEventListeners(): void {
    const activityEvents = ['mousemove', 'keydown', 'mousedown', 'touchstart', 'load'];
    activityEvents.forEach((event) => {
      if (this.userLoggedIn) {
        window.addEventListener(event, this.onUserActivity.bind(this));
      } else {
        window.removeEventListener(event, this.onUserActivity.bind(this));
      }
    });
  }
  public startInactivityTimer(): void {
    if (this.isTimerPaused || !this.userLoggedIn) {
      clearInterval(this.inactivityTimer);
      return; // Skip timer start if it's paused or user is not logged in
    }
    
    this.inactivityTimer = setInterval(() => {
      const currentTime = Date.now();

        if (currentTime - this.lastActivityTimestamp >= this.inactivityThreshold || !this.userLoggedIn) {
          this.isUserInactive$.next(true);
          this.userLoggedIn = false;
        } else {
          this.isUserInactive$.next(false); 
          console.log(
            this.userLoggedIn,
            'inactive time',
            currentTime - this.lastActivityTimestamp,
            this.inactivityThreshold,
            currentTime - this.lastActivityTimestamp >= this.inactivityThreshold
          );
       
      }
    }, 1000); 
  }

  public restartInactivityTimer(): void {
    clearInterval(this.inactivityTimer);
    this.startInactivityTimer();
  }

  public updateActivityTimestamp(): void {
    this.lastActivityTimestamp = Date.now();
  }

  public getUserInactivityStatus(): Observable<boolean> {
    return this.isUserInactive$.asObservable();
  }

  public unsubscribeFromActivityEvents() {
    if (this.activitySubscription) {
      this.activitySubscription.unsubscribe();
    }
  }
}
