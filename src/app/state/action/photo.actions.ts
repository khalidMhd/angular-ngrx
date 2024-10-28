import { createAction, props } from '@ngrx/store';

export const loadPhotos = createAction('[Photo API] Load Photos');
export const loadPhotosSuccess = createAction(
  '[Photo API] Load Photos Success',
  props<{ photos: any[] }>()
);
export const loadPhotosFailure = createAction(
  '[Photo API] Load Photos Failure',
  props<{ error: any }>()
);
