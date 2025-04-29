import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-botones-registro-h',
  imports: [RouterModule],
  templateUrl: './botones-registro-h.component.html',
  styleUrl: './botones-registro-h.component.scss'
})
export class BotonesRegistroHComponent {
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
