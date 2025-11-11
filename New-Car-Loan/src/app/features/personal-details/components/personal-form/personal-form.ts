import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tracker } from '../../../../shared/components/tracker/tracker';

@Component({
  selector: 'app-personal-form',
  standalone: true,
  imports: [Tracker],
  templateUrl: './personal-form.html',
  styleUrl: './personal-form.css',
})
export class PersonalForm {
  isPincodeValid() {
    const pincode = localStorage.getItem('pincode');
    if (pincode && pincode.length === 6) {
      const city = 'pune'; // Example city
      localStorage.setItem('city', city);
      return true;
    }
    return false;
  }


  constructor(private router: Router) {}

  vehicleDetails() {
    this.router.navigate(['/vehicle-details']);
  }
}
