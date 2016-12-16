import { Component, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'app-profile-container',
  template: `
    <app-profile
      [name]="name"
      [handle]="handle"
      [headerPhotoURL]="headerPhotoURL"
      [profilePhotoURL]="profilePhotoURL"
      [posts]="posts"
      [likes]="likes"
      [reposts]="reposts"
      ></app-profile>
  `,
})
export class ProfileContainerComponent implements OnDestroy {
  private disconnect: Function;

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) {
    this.disconnect = ngRedux.connect(this.mapStateToTarget, null)(this);
  }

  ngOnDestroy() {
    this.disconnect();
  }

  private mapStateToTarget(state: IAppState) {
    const {
      posts,
      user: {
        name,
        handle,
        headerPhotoURL,
        profilePhotoURL,
      },
    } = state;

    return {
      name,
      handle,
      headerPhotoURL,
      profilePhotoURL,

      posts: posts.filter(post => post.handle === handle).length,
      likes: posts.filter(post => post.liked).length,
      reposts: posts.filter(post => post.reposted).length,
    };
  }
}
