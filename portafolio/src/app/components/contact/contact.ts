import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../global/scroll.reveal.directive';
import { TXT } from '../global/txt.constantes';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  txt = TXT.contact;

  async copyEmail() {
    try {
      await navigator.clipboard.writeText(this.txt.email);
      console.log('Correo copiado');
    } catch (e) {
      console.error('No se pudo copiar el correo', e);
    }

    const subject = encodeURIComponent('Interés en tu perfil profesional');

    const body = encodeURIComponent(
      `Hola Juan,

      Encontré tu portafolio y me gustaría ponerme en contacto contigo.

      Nombre:
      Empresa:
      Motivo del contacto:

      Quedo atento a tu respuesta.

      Saludos.`
          );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${this.txt.email}&su=${subject}&body=${body}`,
      '_blank'
    );
  }
}


