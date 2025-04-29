import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton4',
  imports: [CommonModule],
  templateUrl: './boton4.component.html',
  styleUrl: './boton4.component.scss'
})
export class Boton4Component {
  @Input() class = '';
  classBase = 'flex items-center justify-center flex-1 gap-3 px-2 py-1 bg-transparent hover:bg-[#6d7991] text-base text-black hover:text-white font-semibold rounded-full hover:border-[#6d7991] shadow-lg cursor-pointer transition-colors duration-200';
}
