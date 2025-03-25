import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { CardComponent } from "../ui/card/card.component";
import { HeaderComponent } from "../ui/header/header.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, CardComponent, HeaderComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

}
