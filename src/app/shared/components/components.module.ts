import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HidebarComponent } from './hidebar/hidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    HidebarComponent,
    FooterComponent,
    ProductItemComponent],
  imports: [
    CommonModule,
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  exports: [
    HidebarComponent,
    FooterComponent,
    ProductItemComponent
  ]
})
export class ComponentsModule { }
