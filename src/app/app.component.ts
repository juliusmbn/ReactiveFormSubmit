import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators  } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

   createForm() {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required ], 
      lastName: ['', Validators.required ]
    });
  }

  onSubmit(){
   console.log(this.employeeForm.value, this.employeeForm.valid);
  }
  
}
