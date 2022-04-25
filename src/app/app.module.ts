import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { RegistersComponent } from './registers/registers.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GenderPipePipe } from '././pipes/gender-pipe.pipe';
import { CustidPipe } from './pipes/custid.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    AllUsersComponent,
    RegistersComponent,
    HomeComponent,
    EditUserComponent,
    GenderPipePipe,
    CustidPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
