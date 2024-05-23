import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration-form/user-registration-form.component';

export const routes: Routes = [
  { path: 'register', component: UserRegistrationComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];
