import { Component, HostListener, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../global/theme.service';
import { TXT } from '../global/txt.constantes';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent implements OnInit {
  txt        = TXT;
  theme      = inject(ThemeService);
  scrolled   = false;
  menuOpen   = false;
  activeLink = 'Inicio';
  

  ngOnInit(): void {}

  @HostListener('window:scroll')
onScroll(): void {
  this.scrolled = window.scrollY > 50;

  const sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'skills', label: 'Skills' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const scrollPosition = window.scrollY + 120;

  for (const section of sections) {
    const element = document.getElementById(section.id);

    if (
      element &&
      scrollPosition >= element.offsetTop &&
      scrollPosition < element.offsetTop + element.offsetHeight
    ) {
      this.activeLink = section.label;
      break;
    }
  }
}
  scrollTo(link: string): void {
    this.activeLink = link;
    this.menuOpen   = false;
    const id = link.toLowerCase().replace(' ', '-').replace('é', 'e');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

    async copyEmail() {
    try {
      await navigator.clipboard.writeText(this.txt.contact.email);
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
      `https://mail.google.com/mail/?view=cm&fs=1&to=${this.txt.contact.email}&su=${subject}&body=${body}`,
      '_blank'
    );
  }

  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
}