import { ContactService } from './services/contact.service';
import { Contact } from './models/contact.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  listeContact: Contact[];

  constructor(private service: ContactService) {}

  ngOnInit() {
    this.service.getListContact().subscribe(
      items => {
        this.listeContact = items;
      }
    );
  }
}
