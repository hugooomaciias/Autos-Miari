import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton2',
  imports: [CommonModule],
  templateUrl: './boton2.component.html',
  styleUrl: './boton2.component.scss'
})
export class Boton2Component {
  @Input() class = '';
  classBase = 'flex items-center justify-center flex-1 gap-3 bg-[#ff3131] hover:bg-[#c80d0d] px-4 py-3 text-base text-white font-semibold rounded-full border-none shadow-lg cursor-pointer transition-all duration-200';
}
