import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // We used it for styling the inputs and the textareas that are passed from outside
  encapsulation: ViewEncapsulation.None,
  // This prop is to attach an attribute, event or anything to this component's host
  host: {
    class: 'control',
  },
})
export class ControlComponent {
  label = input.required<string>();
}
