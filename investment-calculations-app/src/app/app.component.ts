import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header/header.component";
import { UserInputComponent } from "./calculator/user-input/user-input.component";
import { CalculatorComponent } from "./calculator/calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, CalculatorComponent],
})
export class AppComponent {}
