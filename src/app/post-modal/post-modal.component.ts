import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
declare var $;

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent {
  @Input() post: IPost;
  @Output() private toggleLikePost: EventEmitter<void> = new EventEmitter<void>();
  @Output() private toggleRepost: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('modal') private modal: ElementRef;

  open(): void {
    $(this.modal.nativeElement).modal();
  }

  // tslint:disable-next-line:no-unused-variable
  private handleToggleLikePost() {
    this.toggleLikePost.emit(null);
  }

  // tslint:disable-next-line:no-unused-variable
  private handleToggleRepost() {
    this.toggleRepost.emit(null);
  }
}
