import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myForm') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    name: '',
    email: '',
    secretQuestion: '',
    secretAnswer: '',
    gender: ''
  };
  submittedForm = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
    this.submittedForm = true;
    console.log(this.signupForm);
    this.user.name = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secretQuestion;
    this.user.secretAnswer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
