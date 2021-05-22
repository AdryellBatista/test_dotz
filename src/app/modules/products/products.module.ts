import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SalesService } from 'src/app/shared/services/sales/sales.service';

@NgModule({
  declarations: [ProductsListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ComponentsModule,
    ModalModule.forRoot()
  ],
  providers: [
    SalesService
  ]
})
export class ProductsModule { }
