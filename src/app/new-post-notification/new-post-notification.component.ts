import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post-notification',
  templateUrl: './new-post-notification.component.html',
  styleUrls: ['./new-post-notification.component.scss']
})
export class NewPostNotificationComponent implements OnInit {
  private count: number;

  ngOnInit() {
    this.count = 1;
  }

  get message() {
    const postOrPosts = this.count > 1 ? 'posts' : 'post';
    return `View ${this.count} new ${postOrPosts}`;
  }
}
