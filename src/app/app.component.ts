import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('myForm') signupForm: NgForm;

  defaultQuestion = 'pet';
  answer: string;
  submitted = false;
  genders = ['male', 'female'];
  user = {
    userData: {
      username: '',
      email: '',
    },
    secret: '',
    question: '',
    answer: '',
    gender: '',
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: 'rawat10deepak@gmail.com',
    //   },
    //   secret: 'teacher',
    //   question: 'Deepak',
    //   gender: 'male',
    // });

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  //   console.log('Submitted!!');
  // }

  onSubmit() {
    console.log(this.signupForm.valid);
    console.log(this.signupForm);
    console.log('Submitted!!');
    this.submitted = true;
    this.user = this.signupForm.form.value;
  }

  onReset() {
    this.signupForm.reset();
  }
}
