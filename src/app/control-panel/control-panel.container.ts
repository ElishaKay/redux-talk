import { Component, Input, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'app-control-panel-container',
  template: `
    <app-control-panel
      [useRedux]="useRedux"
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
    return {
    };
  }

  private mapDispatchToThis(dispatch) {
    return {
    };
  }
}
