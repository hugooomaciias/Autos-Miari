import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VisitIconComponent } from "../../../components/icons/visit-icon/visit-icon.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-preguntas-frec',
  imports: [RouterModule, CommonModule, VisitIconComponent],
  templateUrl: './preguntas-frec.component.html',
  styleUrl: './preguntas-frec.component.scss'
})
export class PreguntasFrecComponent {

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
  
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
