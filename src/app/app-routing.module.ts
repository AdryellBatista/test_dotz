import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AccessGuard } from './shared/guards/accessGuard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AccessGuard],
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule'
      },
      {
        path: 'produtos',
        loadChildren: './modules/products/products.module#ProductsModule'
      },
      {
        path: 'perfil',
        loadChildren: './modules/profile/profile.module#ProfileModule'
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
