import { Component, Input, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { USER_SET_NAME, USER_SET_HANDLE } from '../twitter/twitter.action-types';

@Component({
  selector: 'app-control-panel-container',
  template: `
    <app-control-panel
      [name]="name"
      [handle]="handle"
      [useRedux]="useRedux"
      (nameChange)="handleNameChange($event)"
      (handleChange)="handleHandleChange($event)"
      ></app-control-panel>
  `,
})
export class ControlPanelContainerComponent implements OnDestroy {
  private disconnect: Function;
  @Input() private useRedux: boolean = false;

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) {
    this.disconnect = ngRedux.connect(this.mapStateToTarget, this.mapDispatchToThis)(this);
  }

  ngOnDestroy() {
    this.disconnect();
  }

  private mapStateToTarget(state: IAppState) {
    const { name, handle } = state.user;

    return {
      name,
      handle,
    };
  }

  private mapDispatchToThis(dispatch) {
    return {
    };
  }

  private handleNameChange(value: string) {
    this.ngRedux.dispatch({
      type: USER_SET_NAME,
      value,
    });
  }

  private handleHandleChange(value: string) {
    this.ngRedux.dispatch({
      type: USER_SET_HANDLE,
      value,
    });
  }
}
