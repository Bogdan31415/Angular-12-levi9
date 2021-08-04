import { Component, Input, OnInit } from '@angular/core';

import { Photo } from "../../../../types/photo.entity";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() photo: Photo;

  constructor() { }

  ngOnInit(): void {
  }

  public deactivate(photo: Photo) {

  }

  public activate(photo: Photo) {

  }
}
