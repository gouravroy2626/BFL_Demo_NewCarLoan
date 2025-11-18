import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { VehicleForm } from './features/vehicle-details/components/vehicle-form/vehicle-form';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,Navbar],
// import { VehicleForm } from './features/vehicle-details/components/vehicle-form/vehicle-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VehicleForm, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('New-Car-Loan');
}
