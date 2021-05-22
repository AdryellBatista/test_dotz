import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/shared/services/sales/sales.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  arOrders: any[];
  userLoged = JSON.parse(localStorage.getItem('USER'));

  constructor(
    private salesService: SalesService
  ) { }

  ngOnInit(): void {
    this.getSales();
  }

  getSales() {
    this.salesService.getSales().subscribe(
      data => {
        const user = this.userLoged;
        // tslint:disable-next-line:only-arrow-functions
        this.arOrders = data.filter( function (e){
          return (e.idUser === user.id)
        });
      }
    );
  }
}
