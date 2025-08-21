import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../support-tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  showDetails = signal(false);
  closeTicket = output<Ticket>();

  onToggleClick() {
    this.showDetails.update((prev) => !prev);
  }

  onCloseTicketClick() {
    this.closeTicket.emit(this.data());
  }
}
