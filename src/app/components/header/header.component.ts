import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  links = [
    { label: 'Home', url: '/home' },
    { label: 'Challenge 1', url: '/challenge1' },
    { label: 'Challenge 2', url: '/challenge2' },
    { label: 'Challenge 3', url: '/challenge3' },
    { label: 'Challenge 4', url: '/challenge4' },
    { label: 'Challenge 5', url: '/challenge5' }
  ];
}
