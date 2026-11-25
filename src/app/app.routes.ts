import { Routes } from '@angular/router';
import { PortfolioPageComponent } from './features/overview/portfolio-page.component';

export const routes: Routes = [
  { path: '', component: PortfolioPageComponent, title: 'Gabriel Henrique | Software Engineering' },
  { path: '**', redirectTo: '' },
];
