import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

// the source is modify from
// https://www.smashingmagazine.com/2018/11/a-complete-guide-to-routing-in-angular/
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe((data : any[])=>{
        console.log(data);
        this.contacts = data;
    })
  }
}

