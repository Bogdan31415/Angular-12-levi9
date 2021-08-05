import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { photoReducers } from "../shared/store/reducers";
import { GetPhotosEffects } from "../shared/store/effects/get-photos.effects";
import { FlexModule } from "@angular/flex-layout";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { HttpClientModule } from "@angular/common/http";
import { ItemService } from "../shared/services/item.service";
import { PhotoModule } from "../shared/modules/photo/photo.module";


@NgModule({
  declarations: [
    PhotoListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('photos', photoReducers),
    EffectsModule.forFeature([GetPhotosEffects]),
    PhotoModule,
    FlexModule,
    MatProgressSpinnerModule,
    HttpClientModule,
  ],
  providers: [ItemService]
})
export class PhotosModule {}
