import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'template-driven-form';

  firstName: string = '';
  lastName: string = '';
  dob: string = '';
  emailAddress: string = '';

  defaultCountry: string = 'Country';

  @ViewChild('registrationForm') form: NgForm;

  genders = [
    { id: 'check-male', value: 'male', display: 'Male' },
    { id: 'check-female', value: 'female', display: 'Female' },
    { id: 'check-other', value: 'other', display: 'prefer not to say' },
  ];

  OnFormSubmitted() {
    // console.log('Form submitted');
    console.log(this.form);
    // console.log(this.form.value.firstname);
    // console.log(this.form.value.lastname);
    // console.log(this.form.value.email);
    // console.log(this.form.value.country);
    // console.log(this.form.controls['firstname'].value);
    // console.log(this.form.controls['lastname'].value);
    // console.log(this.form.controls['email'].value);
    // console.log(this.form.controls['country'].value);

    console.log(this.form.value.firstname);
    console.log(this.form.value.lastname);
    console.log(this.form.value.email);
    console.log(this.form.value.address.country);
    console.log(this.form.value.address.city);

    this.form.reset();
    this.form.form.patchValue({
      gender: 'male',
      address: {
        country: 'Japan',
      },
    });
  }

  GenerateUserName() {
    let username = '';

    if (this.firstName.length >= 3) {
      username += this.firstName.slice(0, 3);
    } else {
      username += this.firstName;
    }
    if (this.lastName.length >= 3) {
      username += this.lastName.slice(0, 3);
    } else {
      username += this.lastName;
    }

    let datetime = new Date(this.dob);
    username += datetime.getFullYear();

    username = username.toLowerCase();

    console.log(username);

    // this.form.value.usename = username;
    // console.log(this.form.value.usename);

    // this.form.controls['username'].value = username;

    // The setValue() method is used to update a FormContol, FormGroup or FormArray value. To the setValue() method, we pass an object to update the value of a FormContol, FormGroup or FormArray. The structure of that object must match the structure of FormContol, FormGroup or FormArray which we are trying to update.

    // this.form.setValue({
    //   firstname: this.form.value.firstname,
    //   lastname: this.form.value.lastname,
    //   email: this.form.value.email,
    //   phone: this.form.value.phone,
    //   dob: this.form.value.dob,
    //   gender: this.form.value.gender,
    //   username: username,
    //   address: {
    //     street1: this.form.value.address.street1,
    //     street2: this.form.value.address.street2,
    //     country: this.form.value.address.country,
    //     city: this.form.value.address.city,
    //     region: this.form.value.address.region,
    //     postal: this.form.value.address.postal,
    //   },
    // });

    // The patchValue() method is used to update only a subset of the element of FormGroup or FormArray value.It will only update the matching objects and ignores the rest.

    this.form.form.patchValue({
      username: username,
      // address: {
      //   country: 'Japan',
      // },
    });
  }
}
