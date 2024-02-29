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
  }
}
