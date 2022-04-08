import { Config } from './../config/config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from '../models/contact.model';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getListContact() {
    return this.http.get<Contact[]>(Config.SERVER_URL + '/contacts/read.php').pipe(
      map(datas => datas.map(data => new Contact().deserialize(data)))
    );
  }
}
