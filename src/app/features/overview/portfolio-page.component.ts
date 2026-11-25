import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { LucideMenu, LucideMoon, LucideSun, LucideX } from '@lucide/angular';
import { ArchitectureLabComponent } from '../architecture/architecture-lab.component';
import { ExperienceSectionComponent } from '../experience/experience-section.component';
import { ProjectsSectionComponent } from '../projects/projects-section.component';
import { TechnologyStackSectionComponent } from '../technology-stack/technology-stack-section.component';
import { ContactSectionComponent } from '../contact/contact-section.component';
import { EngineeringProfileComponent } from './engineering-profile.component';
import { EngineeringOverviewComponent } from './engineering-overview.component';

@Component({
  selector: 'app-portfolio-page',
  imports: [
    ArchitectureLabComponent,
    ContactSectionComponent,
    EngineeringOverviewComponent,
    EngineeringProfileComponent,
    ExperienceSectionComponent,
    LucideMenu,
    LucideMoon,
    LucideSun,
    LucideX,
    ProjectsSectionComponent,
    TechnologyStackSectionComponent,
  ],
  templateUrl: './portfolio-shell.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './portfolio-page.component.scss',
})
export class PortfolioPageComponent {
  protected readonly isLightTheme = signal(false);
  protected readonly isMenuOpen = signal(false);

  protected toggleTheme(): void {
    this.isLightTheme.update((isLight) => !isLight);
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
