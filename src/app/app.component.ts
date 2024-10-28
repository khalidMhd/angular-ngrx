import { Component } from '@angular/core';
import { PhotoListComponent } from './components/photo-list/photo-list.component';

@Component({
  selector: 'app-root',
  template: `<app-photo-list></app-photo-list>`,
  standalone: true,
  imports: [PhotoListComponent,],
})
export class AppComponent {}
