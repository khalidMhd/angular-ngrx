import { createReducer, on } from '@ngrx/store';
import {
  loadPhotos,
  loadPhotosSuccess,
  loadPhotosFailure,
} from '../action/photo.actions';
import { AppState } from '../app.state';

export interface PhotoState {
  photos: any[];
  loading: boolean;
  error: any;
}

export const initialState: PhotoState = {
  photos: [],
  loading: false,
  error: null,
};

export const photoReducer = createReducer(
  initialState,
  on(loadPhotos, (state) => ({ ...state, loading: true, error: null })),
  on(loadPhotosSuccess, (state, { photos }) => ({
    ...state,
    photos: photos.slice(0, 50),
    loading: false,
    error: null,
  })),
  on(loadPhotosFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export const selectPhotos = (state: AppState) => state.photos.photos;

export const selectPhotosLoading = (state: AppState) => state.photos.loading;

export const selectPhotosError = (state: AppState) => state.photos.error;
