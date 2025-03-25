import { Component, Input } from '@angular/core';

// extend built in components in angular, to avoid create double dom containers
// March 25 - take notes on make more general de component
@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input({required: true}) title!: string;
  @Input() icon!: string;
}
