import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  objFormUser: FormGroup;

  userLoged = JSON.parse(localStorage.getItem('USER'));
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
  ) {

      this.objFormUser = formBuilder.group({
        id: new FormControl(null),
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
        address: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        state: new FormControl(null, Validators.required),

      });
  }

  ngOnInit(): void {
    this.setFormValues()

  }

  setFormValues() {
    this.userLoged = JSON.parse(localStorage.getItem('USER'));

    this.objFormUser.get('id').setValue(this.userLoged.id);
    this.objFormUser.get('name').setValue(this.userLoged.name);
    this.objFormUser.get('email').setValue(this.userLoged.email);
    this.objFormUser.get('password').setValue(this.userLoged.password);
    this.objFormUser.get('address').setValue(this.userLoged.address);
    this.objFormUser.get('state').setValue(this.userLoged.state);
    this.objFormUser.get('city').setValue(this.userLoged.city);
  }

  editUser() {
    if (this.objFormUser.valid) {
      this.userService.editUser(this.objFormUser.value).subscribe(
        data => {
          localStorage.setItem('USER', JSON.stringify(data));
          this.setFormValues();
          this.toastr.success('Dados alterados com sucesso!', 'Sucesso');

        }
      );
    } else {
      this.toastr.warning('Existem campo obrigatórios não preenchidos!', 'Atenção');

    }
  }

}
