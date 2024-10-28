import { Component, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpClientModule

@Component({
  selector: 'app-photo',
  template: `
    <div class="photo-card">
      <img [src]="thumbnailUrl" alt="{{ title }}" />
      <h4 class="photo-title">{{ title }}</h4>
    </div>
  `,
  styles: [
    `
      .photo-card {
        display: inline-block;
        margin: 10px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 8px;
        transition: transform 0.3s, box-shadow 0.3s;
        text-align: center;
        background-color: #fff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        width: 180px;
      }

      .photo-card:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }

      img {
        width: 150px;
        height: 150px;
        border-radius: 8px;
      }

      .photo-title {
        margin-top: 10px;
        font-size: 16px;
        color: #333;
        height: 40px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    `
  ],
  imports: [HttpClientModule],
  standalone: true,
})
export class PhotoComponent {
  @Input() title!: string;
  @Input() url!: string;
  @Input() thumbnailUrl!: string;
}
