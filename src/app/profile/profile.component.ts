import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private name: string;
  private handle: string;
  private headerPhotoURL: string;
  private profilePhotoURL: string;

  private posts: number;
  private likes: number;
  private reposts: number;

  ngOnInit() {
    this.name = 'Jesse Pinho';
    this.handle = 'jessepinho';
    this.headerPhotoURL = 'https://pbs.twimg.com/profile_banners/16901789/1398787929/1500x500';
    this.profilePhotoURL = 'https://pbs.twimg.com/profile_images/378800000310650745/5e38031f42fdbacc2c2041f021460f02.jpeg';

    this.posts = 0;
    this.likes = 0;
    this.reposts = 0;
  }
}
