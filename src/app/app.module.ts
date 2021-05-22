import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AccessGuard } from './shared/guards/accessGuard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ComponentsModule } from './shared/components/components.module';
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    ToastrModule.forRoot(
      {positionClass :'toast-top-right'}
    )
  ],
  providers: [
    {provide: ToastrService},
    AccessGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
