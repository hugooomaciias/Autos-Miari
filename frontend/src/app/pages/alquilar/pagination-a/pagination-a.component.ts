import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BotonPageComponent } from "../../../components/boton-page/boton-page.component";
@Component({
  selector: 'app-pagination-a',
  imports: [CommonModule, BotonPageComponent],
  templateUrl: './pagination-a.component.html',
  styleUrl: './pagination-a.component.scss'
})
export class PaginationAComponent {
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
