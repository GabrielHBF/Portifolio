import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideArrowDown, LucideArrowRight, LucideArrowUpRight } from '@lucide/angular';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-engineering-profile',
  imports: [LucideArrowDown, LucideArrowRight, LucideArrowUpRight],
  templateUrl: './engineering-profile.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './section.component.scss',
})
export class EngineeringProfileComponent {
  protected readonly profile = profile;
}
