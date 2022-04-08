import { Deserializable } from './deserilizable.model';
export class Contact implements Deserializable {
  id: number;
  nom: string;
  prenom: string;
  numero: string;
  favoris: boolean;

  /*constructor(data: any) {
    this.id = data.id;
    this.nom = data.nom;
    this.prenom = data.prenom;
    this.numero = data.numero;
    this.favoris = data.favoris;
  }*/

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
