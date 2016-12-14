import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileContainerComponent } from './profile/profile.container';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarContainerComponent } from './navbar/navbar.container';
import { PostComponent } from './post/post.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineContainerComponent } from './timeline/timeline.container';
import { PostModalComponent } from './post-modal/post-modal.component';
import { NewPostNotificationComponent } from './new-post-notification/new-post-notification.component';
import { NewPostFormComponent } from './new-post-form/new-post-form.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileContainerComponent,
    NavbarComponent,
    NavbarContainerComponent,
    PostComponent,
    TimelineComponent,
    TimelineContainerComponent,
    PostModalComponent,
    NewPostNotificationComponent,
    NewPostFormComponent,
    HomeComponent,
  ],
  imports: [
    Angular2FontawesomeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
