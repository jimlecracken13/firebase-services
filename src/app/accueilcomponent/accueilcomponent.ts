import { Component, inject } from '@angular/core';
import { Data } from '../services/data';

@Component({
  selector: 'app-accueilcomponent',
  imports: [],
  templateUrl: './accueilcomponent.html',
  styleUrl: './accueilcomponent.css'
})
export class Accueilcomponent {
  //injection de dépendances
  dataservice:Data = inject(Data)

  ajouter(){
    this.dataservice.EcrireDocument()
  }
  afficher(){
    this.dataservice.LireDocument()
  }
          
}
