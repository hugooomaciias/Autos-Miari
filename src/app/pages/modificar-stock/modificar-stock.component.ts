import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { ReactiveFormsModule } from '@angular/forms';
import { HeroModStockComponent } from "./hero-mod-stock/hero-mod-stock.component";
import { InsertarComponent } from "./insertar/insertar.component";
import { EliminarComponent } from "./eliminar/eliminar.component";

@Component({
  selector: 'app-modificar-stock',
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent, HeroModStockComponent, InsertarComponent, EliminarComponent],
  templateUrl: './modificar-stock.component.html',
  styleUrl: './modificar-stock.component.scss'
})
export class ModificarStockComponent {
  activeTab: 'insertar' | 'eliminar' = 'insertar';
  
  constructor(private router: Router) {}
  
  irAIniciarSesion() {
    this.router.navigate(['/iniSes-Reg'], { queryParams: { tab: 'iniciar-sesion' } });
  }
  
  irARegistro() {
    this.router.navigate(['/iniSes-Reg'], { queryParams: { tab: 'registro' } });
  }

  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
