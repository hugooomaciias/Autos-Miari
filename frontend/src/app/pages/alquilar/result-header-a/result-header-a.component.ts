import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GridIconComponent } from "../../../components/icons/grid-icon/grid-icon.component";
import { ListIconComponent } from "../../../components/icons/list-icon/list-icon.component";
import { ChevromDownIconComponent } from "../../../components/icons/chevrom-down-icon/chevrom-down-icon.component";

@Component({
  selector: 'app-result-header-a',
  imports: [CommonModule, GridIconComponent, ListIconComponent, ChevromDownIconComponent],
  templateUrl: './result-header-a.component.html',
  styleUrl: './result-header-a.component.scss'
})
export class ResultHeaderAComponent {
  @Input() filteredVehicles: any[] = [];
  @Input() viewType: 'grid' | 'list' = 'grid';
  @Output() viewTypeChange = new EventEmitter<'grid' | 'list'>();

  setViewType(type: 'grid' | 'list') {
    this.viewTypeChange.emit(type);
  }
}
