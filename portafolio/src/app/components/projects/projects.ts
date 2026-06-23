import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../global/scroll.reveal.directive';
import { ProjectModalComponent } from '../project-modal/project.modal';
import { Project } from '../project-modal/model/project.model';
import { TXT } from '../global/txt.constantes';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, ProjectModalComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  txt = TXT.projects;
  selectedProject: Project | null = null;

  openModal(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }
}