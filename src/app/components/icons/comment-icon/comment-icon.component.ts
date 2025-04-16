import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment-icon',
  imports: [CommonModule],
  templateUrl: './comment-icon.component.html',
  styleUrl: './comment-icon.component.scss'
})
export class CommentIconComponent {
  @Input() currentClass = '';
  classBase = 'flex items-center text-current';
}
