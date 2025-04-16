import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton3',
  imports: [CommonModule],
  templateUrl: './boton3.component.html',
  styleUrl: './boton3.component.scss'
})
export class Boton3Component {
  @Input() class = '';
  classBase = 'flex items-center justify-center flex-1 gap-3 px-4 py-3 bg-transparent hover:bg-[#6d7991] text-base text-black hover:text-white font-semibold rounded-full hover:border-[#6d7991] shadow-lg cursor-pointer transition-colors duration-200';
}
