import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GridIconComponent } from "../../../components/icons/grid-icon/grid-icon.component";
import { ListIconComponent } from "../../../components/icons/list-icon/list-icon.component";
import { ChevromDownIconComponent } from "../../../components/icons/chevrom-down-icon/chevrom-down-icon.component";

@Component({
  selector: 'app-result-header',
  imports: [CommonModule, GridIconComponent, ListIconComponent, ChevromDownIconComponent],
  templateUrl: './result-header.component.html',
  styleUrl: './result-header.component.scss'
})
export class ResultHeaderComponent {
  @Input() filteredVehicles: any[] = [];
  @Input() viewType: 'grid' | 'list' = 'grid';
  @Output() viewTypeChange = new EventEmitter<'grid' | 'list'>();

  setViewType(type: 'grid' | 'list') {
    this.viewTypeChange.emit(type);
  }
}
