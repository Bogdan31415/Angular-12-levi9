import { Directive, EventEmitter, Output } from "@angular/core";
import { cloneDeep } from "lodash";

@Directive()
export abstract class BaseCardComponent<T extends { isActive: boolean }> {
  @Output() onClick = new EventEmitter<T>();

  public deactivate(item: T): void {
    const updateItem = cloneDeep(item);
    updateItem.isActive = false;
    this.onClick.emit(updateItem);
  }

  public activate(item: T): void {
    const updateItem = cloneDeep(item);
    updateItem.isActive = true;
    this.onClick.emit(updateItem);
  }
}
