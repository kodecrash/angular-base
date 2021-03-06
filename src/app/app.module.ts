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
import { TicketsComponent } from './pages/tickets/tickets.component';
import { ModalService } from './services/modal.service';
import { ModalComponent } from './shared/modal/modal.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    SideNavComponent,
    LoginComponent,
    DatePickerComponent,
    CreateTicketComponent,
    TicketsComponent,
    ModalComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedBootstrapModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  entryComponents: [ModalComponent],
  providers: [ NavService, ModalService, SpinnerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
