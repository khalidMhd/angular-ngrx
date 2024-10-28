import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadPhotos } from '../../state/action/photo.actions';
import { selectPhotos, selectPhotosLoading } from '../../state/reducer/photo.reducer'; // <-- Add selectPhotosLoading
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { PhotoComponent } from '../photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        query('app-photo', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ],
  standalone: true,
  imports: [CommonModule, PhotoComponent, HttpClientModule],
})
export class PhotoListComponent implements OnInit {
  photos$: Observable<any[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.photos$ = this.store.select(selectPhotos);
    this.loading$ = this.store.select(selectPhotosLoading);
  }

  ngOnInit() {
    this.store.dispatch(loadPhotos());
    console.log('loadPhotos action dispatched');
  }
}
