import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideBot, LucideCodeXml, LucideDatabase, LucideLayers } from '@lucide/angular';

@Component({
  selector: 'app-engineering-overview',
  imports: [LucideBot, LucideCodeXml, LucideDatabase, LucideLayers],
  templateUrl: './engineering-overview.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './section.component.scss',
})
export class EngineeringOverviewComponent {}
