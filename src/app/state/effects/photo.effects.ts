import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadPhotos, loadPhotosSuccess, loadPhotosFailure } from '../action/photo.actions';

@Injectable()
export class PhotoEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPhotos),
      mergeMap(() =>
        this.http.get<any[]>('https://fakestoreapi.com/products').pipe(
          map((photos) => loadPhotosSuccess({ photos })),
          catchError((error) => {
            console.error('Error loading photos', error);
            return [loadPhotosFailure({ error })];
          })
        )
      )
    )
  );
}
