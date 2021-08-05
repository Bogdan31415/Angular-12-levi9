import { createSelector } from '@ngrx/store'

import { AppStateInterface, ItemStateInterface } from "../types/app-state.interface";

export function selectData<K, T extends ItemStateInterface<K>>(storeName: string) {
  return createSelector(
    (state: AppStateInterface) => state[storeName],
    (itemState: T) => itemState.data
  )
}

export function isLoadingSelector<K, T extends ItemStateInterface<K>>(storeName: string) {
  return createSelector(
    (state: AppStateInterface) => state[storeName],
    (itemState: T) => itemState.isLoading
  )
}

export function isLoadedSelector<K, T extends ItemStateInterface<K>>(storeName: string) {
  return createSelector(
    (state: AppStateInterface) => state[storeName],
    (itemState: T) => itemState.loaded
  )
}

export function errorSelector<K, T extends ItemStateInterface<K>>(storeName: string) {
  return createSelector(
    (state: AppStateInterface) => state[storeName],
    (itemState: T) => itemState.error
  )
}

export function itemsSelector<K extends { isActive: boolean }, T extends ItemStateInterface<K>>(storeName: string) {
  return createSelector(
    (state: AppStateInterface) => state[storeName],
    (itemState: T) => itemState.data.filter((item) => !item.isActive)
  )
}

export function activeSelector<K extends { isActive: boolean }, T extends ItemStateInterface<K>>(storeName: string) {
  return createSelector(
    (state: AppStateInterface) => state[storeName],
    (itemState: T) => itemState.data.filter((item) => item.isActive)
  )
}

export function selectIsEmpty<K extends { isActive: boolean }, T extends ItemStateInterface<K>>(storeName: string) {
  return createSelector(
    (state: AppStateInterface) => state[storeName],
    (itemState: T) => {
      const activatedItem = itemState.data?.filter((item) => !item.isActive)
      return !(activatedItem && activatedItem?.length > 0)
    }
  )
}

export function selectIsActivatedEmpty<K extends { isActive: boolean }, T extends ItemStateInterface<K>>(storeName: string) {
  return createSelector(
    (state: AppStateInterface) => state[storeName],
    (itemState: T) => {
      const activatedItem = itemState.data?.filter((item) => item.isActive)
      return !(activatedItem && activatedItem?.length > 0)
    }
  )
}
