import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { User } from '../user.credentials.model';

@Component({
  selector: 'app-user-credentials',
  templateUrl: './user-credentials.component.html',
  styleUrls: ['./user-credentials.component.css']
})
export class UserCredentialsComponent implements OnInit {

  userForm: FormGroup = this.formBuilder.group({
    username: [''],
    address: this.formBuilder.group({
        street: [''],
        city: [''],
        zipCode: ['']
    }),
    credentials: this.formBuilder.group({
      email: [''],
      password: [''],
  })
});

onSubmit(): void {
  console.log(this.userForm.value);
} 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
