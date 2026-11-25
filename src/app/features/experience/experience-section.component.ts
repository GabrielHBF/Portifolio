import { Component, ChangeDetectionStrategy } from '@angular/core';
import { engineeringPractice } from '../../data/experience';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../overview/section.component.scss',
})
export class ExperienceSectionComponent {
  protected readonly engineeringPractice = engineeringPractice;
}
