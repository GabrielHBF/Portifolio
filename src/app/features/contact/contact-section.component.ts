import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { LucideCheck, LucideCopy, LucideArrowUpRight } from '@lucide/angular';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-contact-section',
  imports: [LucideArrowUpRight, LucideCheck, LucideCopy],
  templateUrl: './contact-section.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../overview/section.component.scss',
})
export class ContactSectionComponent {
  protected readonly profile = profile;
  protected readonly copyStatus = signal('');

  protected async copyEmail(): Promise<void> {
    if (!this.profile.email) {
      return;
    }

    try {
      await navigator.clipboard.writeText(this.profile.email);
      this.copyStatus.set('E-mail copiado para a área de transferência.');
    } catch {
      this.copyStatus.set('Não foi possível copiar. Tente selecionar o endereço.');
    }
  }
}
