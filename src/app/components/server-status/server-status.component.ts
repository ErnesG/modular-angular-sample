import { Component, Input } from '@angular/core';
import { CardComponent } from '../ui/card/card.component';
import { HeaderComponent } from '../ui/header/header.component';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [CardComponent, HeaderComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  @Input({required: true}) currentStatus!: string;

}
