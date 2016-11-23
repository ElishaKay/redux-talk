import {
  animate,
  Component,
  Input,
  OnInit,
  state,
  style,
  transition,
  trigger,
} from '@angular/core';
import * as moment from 'moment';

function getProfilePhotoURL(): string {
  return `https://unsplash.it/48/48/?random=${Math.random()}`;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  animations: [
    trigger('appear', [
      state('visible', style({
        height: '*',
        'border-width': '*',
        'padding-top': '*',
        'padding-bottom': '*',
      })),
      state('hidden', style({
        height: '0',
        'border-width': '0',
        'padding-top': '0',
        'padding-bottom': '0',
      })),
      transition('hidden <=> visible', [
        animate(350),
      ]),
    ])
  ],
})
export class TimelineComponent implements OnInit {
  private newPostIds: number[];
  private posts: IPost[];

  ngOnInit() {
    this.posts = [
      {
        id: 7,
        createdAt: moment().subtract(1, 'seconds').toDate(),
        handle: 'fuzzbeed',
        name: 'FuzzBeed',
        profilePhotoURL: getProfilePhotoURL(),
        text: 'This Brave Chicken Came Upon A Road. You Won\'t Believe What Happened Next.',
      },
      {
        id: 6,
        createdAt: moment().subtract(10, 'seconds').toDate(),
        handle: 'FiveThirtyEight',
        name: 'FiveThirtyEight',
        profilePhotoURL: getProfilePhotoURL(),
        text: 'Here\'s why everything you think you know about numbers is wrong. 53eig.ht/redux',
      },
      {
        id: 5,
        createdAt: moment().subtract(24, 'minutes').toDate(),
        handle: 'dangerzone',
        name: 'Sterling Archer',
        profilePhotoURL: getProfilePhotoURL(),
        text: 'All I\'ve had today is like six gummy bears and some scotch.',
      },
      {
        id: 4,
        createdAt: moment().subtract(13, 'hours').toDate(),
        handle: 'alex',
        name: 'Alexander Hamilton',
        profilePhotoURL: getProfilePhotoURL(),
        text: 'Big duel tonight. Wish me luck! #sharpshooter #nervous',
      },
      {
        id: 3,
        createdAt: moment().subtract(19, 'hours').toDate(),
        handle: 'inasunshinestateofmind',
        name: 'Florida Man',
        profilePhotoURL: getProfilePhotoURL(),
        text: 'Catch me on the news tonight at 7pm EST!',
      },
      {
        id: 2,
        createdAt: moment().subtract(4, 'days').toDate(),
        handle: 'lowercase',
        name: 'e. e. cummings',
        profilePhotoURL: getProfilePhotoURL(),
        text: 'where is the shift key i cannot find it',
      },
      {
        id: 1,
        createdAt: moment().subtract(10, 'days').toDate(),
        handle: '2016',
        name: 'The Year 2016',
        profilePhotoURL: getProfilePhotoURL(),
        text: 'Sorry for everything.',
      },
    ];

    this.newPostIds = [6, 7];
  }

  handleNewPostNotificationClick() {
    this.newPostIds = [];
  }

  postAnimationState(post: IPost): 'visible' | 'hidden' {
    if (this.newPostIds.indexOf(post.id) !== -1) {
      return 'hidden';
    }
    return 'visible';
  }
}
