import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavComponent } from './shared/nav/nav.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { SharedBootstrapModule } from './shared-bootstrap.module';
import { NavService } from './services/nav.service';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket.component';
import { DatePickerComponent } from './shared/date-picker/date-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    SideNavComponent,
    LoginComponent,
    DatePickerComponent,
    CreateTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedBootstrapModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ NavService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
