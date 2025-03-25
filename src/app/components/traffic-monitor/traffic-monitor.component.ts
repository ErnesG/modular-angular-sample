import { Component, Input } from '@angular/core';
import { Traffic } from '../../model/Traffic';
import { CardComponent } from '../ui/card/card.component';
import { HeaderComponent } from '../ui/header/header.component';

@Component({
  selector: 'app-traffic-monitor',
  standalone: true,
  imports: [CardComponent, HeaderComponent],
  templateUrl: './traffic-monitor.component.html',
  styleUrl: './traffic-monitor.component.css'
})
export class TrafficMonitorComponent {
  trafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  maxTraffic = Math.max(...this.trafficData.map((data) => data.value))
}
