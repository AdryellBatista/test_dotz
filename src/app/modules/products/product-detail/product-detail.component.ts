import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesService } from 'src/app/shared/services/sales/sales.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: any;
  objProduct: any;
  userLoged = JSON.parse(localStorage.getItem('USER'));
  @ViewChild('myModal1') myModal1: any;
  @ViewChild('myModalSuccess') myModalSuccess: any;


  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private salesService: SalesService,
    private userService: UserService,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot) {
      this.productId = this.activatedRoute.snapshot.params.id;
    }

    this.getProduct(this.productId);
  }

  getProduct(idProduct) {
    this.productService.getProduct(idProduct).subscribe(
      data => {
        this.objProduct = data;
      }
    );
  }

  goBack() {
    this.router.navigate(['produtos']);
  }

  sale () {
    if (this.userLoged.balance < this.objProduct.price) {
      this.myModal1.show();
    } else {
      this.myModalSuccess.show();

    }
  }

  saleRegister() {
    const objSale = {
      idProduct: this.productId,
      idUser: this.userLoged.id,
      price: this.objProduct.price,
      data: new Date(),
      status: 'Em processamento'
    }

    this.salesService.setSale(objSale).subscribe(
      data => {
        const userData = this.userLoged;

        userData.balance = this.userLoged.balance - this.objProduct.price;

        this.userService.editUser(userData).subscribe(
          jata => {
            localStorage.setItem('USER', JSON.stringify(jata));
            this.myModalSuccess.hide();
            this.toastr.success('Pedido Realizado com sucesso!', 'Sucesso');

            this.goBack()
          }
        );
      }
    );
  }

}
