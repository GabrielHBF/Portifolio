import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideArrowUpRight } from '@lucide/angular';
import { projects } from '../../data/projects';

@Component({
  selector: 'app-projects-section',
  imports: [LucideArrowUpRight],
  templateUrl: './projects-section.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../overview/section.component.scss',
})
export class ProjectsSectionComponent {
  protected readonly projects = projects;
}
