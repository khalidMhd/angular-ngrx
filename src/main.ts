import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { PhotoEffects } from './app/state/effects/photo.effects';
import { AppComponent } from './app/app.component';
import { CommonModule } from '@angular/common';
import { photoReducer } from './app/state/reducer/photo.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideStore({ photos: photoReducer }),
    provideEffects(PhotoEffects),
    { provide: 'commonModule', useClass: CommonModule },
  ],
});
