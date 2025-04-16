import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton',
  imports: [CommonModule],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.scss'
})
export class BotonComponent {
  @Input() class = '';
  classBase = 'flex items-center gap-3 bg-transparent hover:bg-[#ff3131] px-4 py-3 text-black hover:text-white font-semibold rounded-xl border-2 hover:border-[#ff3131] cursor-pointer transition-colors duration-200';
}
