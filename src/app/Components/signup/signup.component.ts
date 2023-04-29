import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash"
  signUpForm!: FormGroup;
  constructor(private fb : FormBuilder, private auth: AuthService){ }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";

  }
  onSignup(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value)
    }else{
      ValidateForm.validateAllFormFileds(this.signUpForm)

    }
  }
     
}
