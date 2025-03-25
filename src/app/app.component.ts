import { Component } from '@angular/core';
import { HeaderComponent } from './components/ui/header/header.component';
import { CardComponent } from './components/ui/card/card.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { ServerStatusComponent } from "./components/server-status/server-status.component";
import { TrafficMonitorComponent } from "./components/traffic-monitor/traffic-monitor.component";
import { TicketsComponent } from "./components/tickets/tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [NavbarComponent, ServerStatusComponent, TrafficMonitorComponent, TicketsComponent]
})
export class AppComponent {
  
  
  currentStatus = 'online';
}
