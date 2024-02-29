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
  emailAddress: string = '';

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
    console.log(this.form.controls['firstname'].value);
    console.log(this.form.controls['lastname'].value);
    console.log(this.form.controls['email'].value);
    console.log(this.form.controls['country'].value);
  }
}
