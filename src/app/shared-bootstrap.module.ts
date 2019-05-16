import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
    AccordionModule,
    DatepickerModule,
    BsDatepickerModule,
    ModalModule
  ]
})
export class SharedBootstrapModule { }
