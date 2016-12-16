import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  @Input() private name: string;
  @Input() private handle: string;
  @Input() private useRedux: boolean;
  @Output() private nameChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() private handleChange: EventEmitter<string> = new EventEmitter<string>();

  private handleNameChange(name: string) {
    this.nameChange.emit(name);
  }

  private handleHandleChange(name: string) {
    this.handleChange.emit(name);
  }
}
