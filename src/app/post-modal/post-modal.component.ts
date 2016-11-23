import { Component, Input } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
declare var $;

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent {
  @Input() post: IPost;
  @ViewChild('modal') private modal: ElementRef;

  open(): void {
    $(this.modal.nativeElement).modal();
  }
}
