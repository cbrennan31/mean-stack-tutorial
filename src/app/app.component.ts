import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentUser: {
    email: string,
    password: string
  }
  signupForm: FormGroup

  constructor(private formBuilder: FormBuilder,
              private httpClient: HttpClient) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    })
  }

  onSubmit() {
    this.postForm().subscribe((response) => {
      this.currentUser = response
      console.log(response)
    })
  }

  postForm() {
    const formPayload = {
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    }
    return this.httpClient.post('http://localhost:3000/api/users', formPayload)
    .catch((error) => {
      return Observable.throw("Something went wrong")
    })
  }
}
