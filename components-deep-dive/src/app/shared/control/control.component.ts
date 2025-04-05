import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // We used it for styling the inputs and the textareas that are passed from outside
  encapsulation: ViewEncapsulation.None,
})
export class ControlComponent {
  label = input.required<string>();
}
