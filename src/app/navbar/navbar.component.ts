import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private name: string;
  private profilePhotoURL: string;

  ngOnInit() {
    this.name = 'Jesse Pinho';
    this.profilePhotoURL = 'https://pbs.twimg.com/profile_images/378800000310650745/5e38031f42fdbacc2c2041f021460f02.jpeg';
  }
}
