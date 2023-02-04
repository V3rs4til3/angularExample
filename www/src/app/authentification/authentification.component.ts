import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthServiceService} from "../services/auth-service.service";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent {

  // @ts-ignore
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthServiceService) {}


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe({
      next: res => {
        alert('OK');
      },
      error: () => {
        alert('NON');
      }
    });
  }
}
