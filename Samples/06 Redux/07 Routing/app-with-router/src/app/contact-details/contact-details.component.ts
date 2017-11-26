import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Contact, ContactService} from "../contact.service";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contactId;
  contact: Contact;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private contactService: ContactService) {

    //console.log("id", route.snapshot.params.id);

    route.params.subscribe(params => {
      this.contactId = params.id * 1;
      console.log("id", this.contactId);

      this.contact = this.contactService.get(this.contactId);
    })
  }

  ngOnInit() {
  }

  next() {
    this.router.navigate(["/contact", this.contactId+1]);
  }
}
