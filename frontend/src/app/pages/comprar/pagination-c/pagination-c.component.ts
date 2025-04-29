import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BotonPageComponent } from "../../../components/boton-page/boton-page.component";

@Component({
  selector: 'app-pagination-c',
  imports: [CommonModule, BotonPageComponent],
  templateUrl: './pagination-c.component.html',
  styleUrl: './pagination-c.component.scss'
})
export class PaginationCComponent {
  @Input() vehicles: any[] = [];
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 21;
  @Input() pageVehicles: any;
  @Input() totalPages: number = 0;

  @Output() goToPage = new EventEmitter<number>();

  irAPagina(currentPage: number) {
    this.goToPage.emit(currentPage);

    window.scrollTo({ top: 0 });
  }
}
