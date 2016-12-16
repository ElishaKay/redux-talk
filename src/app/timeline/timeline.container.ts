import { Component, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import {
  POST_ADD,
  POST_TOGGLE_LIKE,
  POST_TOGGLE_REPOST,
  NEW_POST_IDS_RESET,
} from '../app.action-types';

@Component({
  selector: 'app-timeline-container',
  template: `
    <app-timeline
      [newPostIds]="newPostIds"
      [posts]="posts"
      [isRedux]="true"
      (newPost)="handleNewPost($event)"
      (newPostNotificationClick)="handleNewPostNotificationClick()"
      (toggleLikePost)="handleToggleLikePost($event)"
      (toggleRepost)="handleToggleRepost($event)"
      ></app-timeline>
  `,
})
export class TimelineContainerComponent implements OnDestroy {
  private disconnect: Function;

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) {
    this.disconnect = ngRedux.connect(this.mapStateToTarget, this.mapDispatchToThis)(this);
  }

  ngOnDestroy() {
    this.disconnect();
  }

  private mapStateToTarget(state) {
    const newPostIds = state.newPostIds;
    const posts = state.posts;

    return {
      newPostIds,
      posts,
    };
  }

  private mapDispatchToThis(dispatch) {
    return {
      handleNewPost: (post: IPost) => dispatch({ type: POST_ADD, value: post }),
      handleNewPostNotificationClick: () => dispatch({ type: NEW_POST_IDS_RESET }),
      handleToggleLikePost: (post: IPost) => dispatch({ type: POST_TOGGLE_LIKE, value: post }),
      handleToggleRepost: (post: IPost) => dispatch({ type: POST_TOGGLE_REPOST, value: post }),
    };
  }
}
