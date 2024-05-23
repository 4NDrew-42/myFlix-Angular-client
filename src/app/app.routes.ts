import { Routes } from '@angular/router';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';

export const routes: Routes = [
  { path: 'register', component: UserRegistrationFormComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];
