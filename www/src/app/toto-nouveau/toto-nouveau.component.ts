import { Component } from '@angular/core';

@Component({
  selector: 'app-toto-nouveau',
  templateUrl: './toto-nouveau.component.html',
  styleUrls: ['./toto-nouveau.component.scss']
})
export class TotoNouveauComponent {
  nom: string = "toto";

  ajouter(): void {
    console.log(this.nom)
  }
}
