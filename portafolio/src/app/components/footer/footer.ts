import { Component } from '@angular/core';
import { TXT } from '../global/txt.constantes';


@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  txt = TXT.footer;
}