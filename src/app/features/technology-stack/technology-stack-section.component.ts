import { Component, ChangeDetectionStrategy } from '@angular/core';
import { engineeringPrinciples, technologyGroups } from '../../data/technologies';

@Component({
  selector: 'app-technology-stack-section',
  templateUrl: './technology-stack-section.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../overview/section.component.scss',
})
export class TechnologyStackSectionComponent {
  protected readonly technologyGroups = technologyGroups;
  protected readonly principles = engineeringPrinciples;
}
