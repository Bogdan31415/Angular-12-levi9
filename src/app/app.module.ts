import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavigationBarModule } from "./shared/modules/navigation-bar/navigation-bar.module";
import { MaterialModule } from "./material.module";
import { HeaderModule } from "./shared/modules/header/header.module";
import { UsersModule } from "./users/users.module";
import { PostsModule } from "./posts/posts.module";
import { PhotosModule } from "./photos/photos.module";
import { ActivatedModule } from "./activated/activated.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    PostsModule,
    PhotosModule,
    ActivatedModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    MaterialModule,
    HeaderModule,
    NavigationBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
