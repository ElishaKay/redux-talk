import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { DevToolsExtension, NgRedux, NgReduxModule } from 'ng2-redux';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ControlPanelContainerComponent } from './control-panel/control-panel.container';
import { CounterComponent } from './counter/counter.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileContainerComponent } from './profile/profile.container';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarContainerComponent } from './navbar/navbar.container';
import { PostComponent } from './post/post.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineContainerComponent } from './timeline/timeline.container';
import { NewPostNotificationComponent } from './new-post-notification/new-post-notification.component';
import { NewPostFormComponent } from './new-post-form/new-post-form.component';
import { HomeComponent } from './home/home.component';
import { rootReducer } from './app.reducers';
import { AddNumbersComponent } from './add-numbers/add-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    ControlPanelContainerComponent,
    ProfileComponent,
    ProfileContainerComponent,
    NavbarComponent,
    NavbarContainerComponent,
    PostComponent,
    TimelineComponent,
    TimelineContainerComponent,
    NewPostNotificationComponent,
    NewPostFormComponent,
    HomeComponent,
    CounterComponent,
    AddNumbersComponent,
  ],
  imports: [
    Angular2FontawesomeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    NgReduxModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'add', component: AddNumbersComponent },
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    devToolsExtension: DevToolsExtension,
    ngRedux: NgRedux<IAppState>
  ) {
    const enhancers = [];

    if (devToolsExtension.isEnabled()) {
      enhancers.push(devToolsExtension.enhancer());
    }

    ngRedux.configureStore(rootReducer, {}, [], enhancers);
  }
}
