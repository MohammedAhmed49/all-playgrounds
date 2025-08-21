import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './support-tickets.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css',
})
export class SupportTicketsComponent {
  tickets: Ticket[] = [];

  onAdd({ title, text }: { title: string; text: string }) {
    this.tickets.push({
      id: Math.random().toString(),
      title: title,
      request: text,
      status: 'opened',
    });

    console.log(this.tickets);
  }
}
