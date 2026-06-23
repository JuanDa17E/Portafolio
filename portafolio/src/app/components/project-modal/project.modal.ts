import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from './model/project.model';


@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.modal.html',
  styleUrl: './project.modal.scss',
})
export class ProjectModalComponent {
  @Input()  project!: Project;
  @Output() close = new EventEmitter<void>();

  activeIndex = 0;
  isExpanded = false;

  ngOnChanges(): void { this.activeIndex = 0; this.isExpanded = false; }

  prevImg(): void {
    this.activeIndex = this.activeIndex === 0
      ? this.project.gallery.length - 1
      : this.activeIndex - 1;
  }

  nextImg(): void {
    this.activeIndex = this.activeIndex === this.project.gallery.length - 1
      ? 0
      : this.activeIndex + 1;
  }

  toggleExpand(event?: MouseEvent): void {
    event?.preventDefault();
    event?.stopPropagation();
    this.isExpanded = !this.isExpanded;
  }

  closeExpanded(): void {
    this.isExpanded = false;
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.close.emit();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isExpanded) {
      this.isExpanded = false;
    } else {
      this.close.emit();
    }
  }
}