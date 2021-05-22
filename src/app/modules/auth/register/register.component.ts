import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  objFormUser: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
      this.objFormUser = formBuilder.group({
        id: new FormControl(null),
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
        balance: new FormControl(null),

      });
  }

  ngOnInit() {

  }

  save() {
    if (this.objFormUser.valid) {
      this.objFormUser.get('balance').setValue(100000);
      this.userService.setUser(this.objFormUser.value).subscribe(
        data => {
          this.toastr.success('Usuário cadastrado com sucesso!', 'Sucesso!');
          this.router.navigate(['/auth/login']);
        },
        err => {

        }
      );
    } else {
      this.toastr.warning('Campos obrigatórios não preenchidos', 'Atenção');
    }
  }

  goBack() {
    this.router.navigate(['/auth/login']);
  }
}
