import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PostModalComponent } from './post-modal/post-modal.component';
import { NewPostNotificationComponent } from './new-post-notification/new-post-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    PostComponent,
    TimelineComponent,
    PostModalComponent,
    NewPostNotificationComponent
  ],
  imports: [
    Angular2FontawesomeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }