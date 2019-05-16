import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef  } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {
  modalRef: BsModalRef;
  form: FormGroup;
  submitted = false;
  dateValue: Date = new Date();
  @ViewChild('modalTemplate') modalTemplate: ElementRef;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private modalService: BsModalService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      applicationName: ['', Validators.required],
      category: ['', Validators.required],
      subject: ['', Validators.required],
      description: ['', []],
      status: ['', Validators.required],
      priority: ['', Validators.required],
      assignee: ['', Validators.required],
      platform: ['', []],
      dueDate: [this.dateValue, Validators.required],
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onDateValueChange(date: Date) {
   // this.form.controls['dueDate'].setValue(date, {emitModelToViewChange: true});
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

   // this.openModal(this.modalTemplate.nativeElement);

   this.router.navigate(['home']);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
