import { Component, OnInit } from '@angular/core';
import { UserActivityService } from 'src/app/services/useractivitys.service';

@Component({
  selector: 'app-view-video-id',
  templateUrl: './view-video-id.component.html',
  styleUrls: ['./view-video-id.component.css']
})
export class ViewVideoIdComponent implements  OnInit {
  constructor(private inactivityService: UserActivityService) {}

  ngOnInit(): void {
    console.log('ViewVideosComponent initialized.');
    this.inactivityService.updateActivityTimestamp(); // Update the activity timestamp when component initializes
  }
}
