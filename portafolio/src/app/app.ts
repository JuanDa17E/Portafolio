import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./components/hero/hero";
import { NavbarComponent } from "./components/navbar/navbar";
import { FooterComponent } from "./components/footer/footer";
import { ContactComponent } from "./components/contact/contact";
import { ProjectsComponent } from "./components/projects/projects";
import { SkillsComponent } from "./components/skills/skills";
import { AboutComponent } from "./components/about/about";
import { ThemeService } from './components/global/theme.service';

@Component({
  selector: 'app-root',
  imports: [ HeroComponent, NavbarComponent, FooterComponent, ContactComponent, ProjectsComponent, SkillsComponent, AboutComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portafolio');
  private theme = inject(ThemeService);

  
  ngOnInit(): void {
    this.theme.init();
  }

}


