import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  objFormLogin: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private userService: UserService,
  ) {
    this.objFormLogin = formBuilder.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }

  login() {
    if (this.objFormLogin.valid) {
      this.userService.getUsers().subscribe(
        data => {
          const objLogin = this.objFormLogin.value;
          // tslint:disable-next-line:only-arrow-functions
          const validUser = data.filter( function(e) {
            return (e.email === objLogin.email && e.password === objLogin.password);
          });

          if (validUser.length === 0) {
            this.toastr.error('Login Inválido', 'Erro');
          } else {
            localStorage.setItem('USER', JSON.stringify(validUser[0]));
            this.router.navigate(['/home']);
          }
        }
      );
    } else {
      this.toastr.warning('Campos obrigatórios não preenchidos', 'Atenção');
    }
  }
}
