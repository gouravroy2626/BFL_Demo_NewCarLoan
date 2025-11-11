import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [],
  templateUrl: './tracker.html',
  styleUrl: './tracker.css',
})
export class Tracker implements OnInit {
  steps = ['Personal details', 'Vehicle details', 'Income verification'];
  currentStep = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateCurrentStep();
  }

  updateCurrentStep() {
    const url = this.router.url;
    if (url.includes('personal-details')) {
      this.currentStep = 0;
    } else if (url.includes('vehicle-details')) {
      this.currentStep = 1;
    } else if (url.includes('income')) {
      this.currentStep = 2;
    }
  }

  getStepClass(index: number): string {
    if (index === this.currentStep) return 'step active';
    if (index < this.currentStep) return 'step completed';
    return 'step locked';
  }
}
