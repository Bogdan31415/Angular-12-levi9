import { Component, OnInit, Self } from '@angular/core';

import { itemsSelector } from "../../../shared/store/selectors";
import { ItemStateInterface } from "../../../shared/types/app-state.interface";
import { PhotoSelfService } from "../../services/photo-self.service";
import { Photo } from "../../../shared/types/photo.entity";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
  providers: [PhotoSelfService]
})
export class PhotoListComponent implements OnInit {

  constructor(@Self() readonly photoSelfService: PhotoSelfService) { }

  ngOnInit(): void {
    this.photoSelfService.fetchData();
    this.photoSelfService.initializeValues();
    this.photoSelfService.initializeListeners(itemsSelector<Photo, ItemStateInterface<Photo>>("photos"));
  }

  public changeActivated(photo: Photo) {
    this.photoSelfService.changeItemActivated(photo);
  }
}
