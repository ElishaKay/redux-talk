import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

function getProfilePhotoURL(): string {
  return `https://unsplash.it/48/48/?random=${Math.random()}`;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  private posts: IPost[];

  ngOnInit() {
    this.posts = [
      {
        createdAt: moment().subtract(24, 'minutes').toDate(),
        handle: 'dangerzone',
        name: 'Sterling Archer',
        profilePhotoURL: getProfilePhotoURL(),
        text: 'All I\'ve had today is like six gummy bears and some scotch.',
      },
      {
        createdAt: moment().subtract(13, 'hours').toDate(),
        handle: 'alex',
        name: 'Alexander Hamilton',
        profilePhotoURL: getProfilePhotoURL(),
        text: 'Big duel tonight. Wish me luck! #nervous #sharpshooter',
      },
      {
        createdAt: moment().subtract(19, 'hours').toDate(),
        handle: 'inasunshinestateofmind',
        name: 'Florida Man',
        profilePhotoURL: getProfilePhotoURL(),
        text: 'Catch me on the news tonight at 7pm EST!',
      },
      {
        createdAt: moment().subtract(4, 'days').toDate(),
        handle: 'lowercase',
        name: 'e. e. cummings',
        profilePhotoURL: getProfilePhotoURL(),
        text: 'where is the shift key i cannot find it',
      },
      {
        createdAt: moment().subtract(10, 'days').toDate(),
        handle: '2016',
        name: 'The Year 2016',
        profilePhotoURL: getProfilePhotoURL(),
        text: 'Sorry for everything.',
      },
    ];
  }
}
