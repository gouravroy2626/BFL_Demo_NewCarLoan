import { Routes } from '@angular/router';
import { Home } from './features/home/components/home/home';
import { VehicleForm } from './features/vehicle-details/components/vehicle-form/vehicle-form';
import { PersonalForm } from './features/personal-details/components/personal-form/personal-form';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'personal-details',
        component: PersonalForm
    },
    {
        path: 'vehicle-details',
        component: VehicleForm
    }
]
