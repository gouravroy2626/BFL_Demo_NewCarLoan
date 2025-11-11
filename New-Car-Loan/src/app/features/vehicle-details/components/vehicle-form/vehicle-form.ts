
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './vehicle-form.html',
  styleUrls: ['./vehicle-form.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VehicleForm {
  private readonly formBuilder = inject(FormBuilder);
  readonly form = this.formBuilder.group({
    brand: ['', Validators.required],
    model: ['', Validators.required],
    dealer: ['', Validators.required],
  });

  onContinue() {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key)?.markAsTouched();
      });
    } else {
      // Form is valid, proceed with submission
      console.log('Form submitted:', this.form.value);
      // Add your logic here (e.g., navigate to next step, submit data)
    }
  }

  onSaveToCart() {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key)?.markAsTouched();
      });
    } else {
      console.log('Saved to cart:', this.form.value);
      // Add your logic here
    }
  }
}
