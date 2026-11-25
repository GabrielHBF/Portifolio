import { Component, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { LucideArrowUpRight } from '@lucide/angular';
import { architectureDiagrams } from '../../data/architecture';

@Component({
  selector: 'app-architecture-lab',
  imports: [LucideArrowUpRight],
  templateUrl: './architecture-lab.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './architecture-lab.component.scss',
})
export class ArchitectureLabComponent {
  protected readonly diagrams = architectureDiagrams;
  protected readonly activeDiagramId = signal(this.diagrams[0].id);
  protected readonly activeNodeId = signal(this.diagrams[0].nodes[2].id);
  protected readonly activeDiagram = computed(
    () =>
      this.diagrams.find((diagram) => diagram.id === this.activeDiagramId()) ?? this.diagrams[0],
  );
  protected readonly activeNode = computed(
    () =>
      this.activeDiagram().nodes.find((node) => node.id === this.activeNodeId()) ??
      this.activeDiagram().nodes[0],
  );

  protected selectDiagram(id: string): void {
    const diagram = this.diagrams.find((item) => item.id === id);
    if (!diagram) {
      return;
    }

    this.activeDiagramId.set(id);
    this.activeNodeId.set(diagram.nodes[0].id);
  }

  protected selectNode(id: string): void {
    this.activeNodeId.set(id);
  }
}
