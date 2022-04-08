import { Contact } from './../models/contact.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.scss']
})
export class CardContactComponent implements OnInit {

  @Input() item: Contact;

  constructor() { }

  ngOnInit() {
  }

  changeFavValue() {
    this.item.favoris = !this.item.favoris;
  }

}
