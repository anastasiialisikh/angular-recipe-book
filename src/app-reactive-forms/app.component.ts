import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  singupForm: FormGroup;
  forbiddenUsernames = ['Anna', 'Mark'];

  ngOnInit() {
    this.singupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this))
      }),
      gender: new FormControl('female'),
      hobbies: new FormArray([])
    });

    // this.singupForm.valueChanges.subscribe(
    //   (value) => { console.log(value); }
    // );

    this.singupForm.statusChanges.subscribe(
      (value) => { console.log(value); }
    );

    this.singupForm.setValue({
      userData: {
        username: 'Max',
        email: 'dfs@sfs.com'
      },
      gender: 'male',
      hobbies: []
    });

    this.singupForm.patchValue({
      userData: {
        username: 'Ivan'
      }
    });
  }

  onSubmit() {
    console.log(this.singupForm);
    this.singupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.singupForm.get('hobbies') as FormArray).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {nameIsForbidden: true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any>  | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({emailIsForbidden: true});
        }

        resolve(null);
      }, 1500);
    });

    return promise;
  }
}
