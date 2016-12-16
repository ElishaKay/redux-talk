import { Component, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'app-navbar-container',
  template: `
    <app-navbar
      [name]="name"
      [profilePhotoURL]="profilePhotoURL"
      ></app-navbar>
  `,
})
export class NavbarContainerComponent {
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
    const { user: { name, profilePhotoURL } } = state;

    return {
      name,
      profilePhotoURL,
    };
  }
}
