import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Boton3Component } from "../../../components/boton3/boton3.component";
import { Router } from '@angular/router';
import { VisitIconComponent } from "../../../components/icons/visit-icon/visit-icon.component";

@Component({
  selector: 'app-preguntas-frec',
  imports: [CommonModule, Boton3Component, VisitIconComponent],
  templateUrl: './preguntas-frec.component.html',
  styleUrl: './preguntas-frec.component.scss'
})
export class PreguntasFrecComponent {
  constructor(private router: Router) {}

  frecQuestions: any[] = [
    {
      quest: '¿Cuánto se tarda en tramitar un pedido?',
      answer: 'La mayoría de los pedidos se procesan en 24-48 horas. Los plazos de entrega varían en función de varios factores.'
    },
    {
      quest: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos las principales tarjetas de crédito, PayPal, Apple Pay y Google Pay para realizar transacciones seguras y cómodas.'
    },
    {
      quest: '¿Ofrecen pruebas de conducción?',
      answer: 'Sí, ofrecemos pruebas de conducción para todos nuestros vehículos. Puede programar una prueba de conducción a través de nuestra página de reserva de citas.'
    },
    {
      quest: '¿Cuál es su política de devoluciones?',
      answer: 'Ofrecemos una garantía de satisfacción de 30 días'
    },
  ]
  
  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
