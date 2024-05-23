import { Component } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent {
  userDetails = {
    username: '',
    password: '',
    email: '',
    birthday: '',
  };

  constructor(private fetchApiData: FetchApiDataService) {}

  registerUser(): void {
    this.fetchApiData
      .userRegistration(this.userDetails)
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
