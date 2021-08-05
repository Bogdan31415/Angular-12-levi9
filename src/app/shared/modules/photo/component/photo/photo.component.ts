import { Component } from '@angular/core';

import { BaseCardComponent } from "../../../components/base-card.component";
import { Photo } from "../../../../types/photo.entity";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent extends BaseCardComponent<Photo> {
}
