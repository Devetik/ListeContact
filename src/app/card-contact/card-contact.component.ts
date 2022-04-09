import { ContactService } from './../services/contact.service';
import { Contact } from './../models/contact.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.scss']
})
export class CardContactComponent implements OnInit {

  @Input() item: Contact;

  constructor(private service: ContactService) { }

  ngOnInit() {
  }

  changeFavValue() {
    this.service.updateFavValue(this.item.id, !this.item.favoris).subscribe(
      result => { this.item.favoris = !this.item.favoris; },
      error => {console.log("erreur")},
      () => {}
    );
  }

  changeFavValueRemove() {
    this.service.updateFavValue(this.item.id, this.item.favoris).subscribe(
      result => { this.item.favoris = !this.item.favoris; },
      error => {console.log("erreur")},
      () => {}
    );
  }


}
