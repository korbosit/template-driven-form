import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'template-driven-form';

  @ViewChild('registrationForm') form: NgForm;

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
