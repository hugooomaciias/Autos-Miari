import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { UsIconComponent } from "../../../components/icons/us-icon/us-icon.component";
import { CarIcon2Component } from '../../../components/icons/car-icon2/car-icon2.component';
import { EuroIconComponent } from '../../../components/icons/euro-icon/euro-icon.component';
import { CalendarAlquilerIconComponent } from '../../../components/icons/calendar-alquiler-icon/calendar-alquiler-icon.component';
import { HistoryIconComponent } from '../../../components/icons/history-icon/history-icon.component';
import { SupportIconComponent } from '../../../components/icons/support-icon/support-icon.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicios',
  imports: [RouterModule, CommonModule, UsIconComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  services: any[] = [
    {
      icon: CarIcon2Component,
      title: "Catálogo amplio",
      description: "Explora miles de vehículos de concesionarios y vendedores particulares de confianza."
    },
    {
      icon: EuroIconComponent,
      title: "Precio competente",
      description: "Obtenga el mejor valor con nuestra garantía de igualación de precios y precios transparentes."
    },
    {
      icon: CalendarAlquilerIconComponent,
      title: "Alquiler flexible",
      description: "Opciones de alquiler diario, semanal o mensual para adaptarse a tus horarios y necesidades."
    },
    {
      icon: HistoryIconComponent,
      title: "Historial del vehículo",
      description: "Informes detallados del historial del vehículo disponibles para todos los vehículos de segunda mano."
    },
    {
      icon: SupportIconComponent,
      title: "Soporte 24/7",
      description: "Nuestro equipo de atención al cliente está disponible las 24 horas del día para ayudarle."
    }
  ]

  isMobile: boolean = false;
  currentPage: number = 0;

  @Input() currentSlide: number = 0;

  @Output() slideChange = new EventEmitter<number>();
  
  goToPage(page: number) {
    if (page >= 0 && page * 3 < this.services.length) {
      this.currentPage = page;
    }
    this.slideChange.emit(this.currentPage);
  }

  onScroll(event: Event): void {
    const container = this.scrollContainer.nativeElement;
    const scrollLeft = container.scrollLeft;
    const width = container.offsetWidth;

    this.currentSlide = Math.round(scrollLeft / width);
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    this.isMobile = window.innerWidth < 768; // Puedes ajustar el breakpoint
  }
}
