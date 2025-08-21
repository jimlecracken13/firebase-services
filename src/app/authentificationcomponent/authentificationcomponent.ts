import { Component, inject, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth'
import { FormsModule } from '@angular/forms';
import { AuthentificationService } from '../services/authentification-service';
import { Router } from '@angular/router'
import { Data } from '../services/data';
@Component({
  selector: 'app-authentificationcomponent',
  imports: [FormsModule],
  templateUrl: './authentificationcomponent.html',
  styleUrl: './authentificationcomponent.css'
})
export class Authentificationcomponent implements OnInit{

    constructor(private authService: AuthentificationService, private router: Router, private dataservice: Data) {}
  

  ngOnInit(): void {

    this.dataservice.EcrireDocument()
      
  } 
 email = '';
  password = '';
  message = '';
  


  async register() {
    try {
      await this.authService.register(this.email, this.password);
      this.message = 'Inscription réussie ✅';
      this.router.navigate(['accueil'])
    } catch (error: any) {
      this.message = 'Erreur : ' + error.message;
    }
  }

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      this.message = 'Connexion réussie ✅';
    } catch (error: any) {
      this.message = 'Erreur : ' + error.message;
    }
  }

  async logout() {
    try {
      await this.authService.logout();
      this.message = 'Déconnexion réussie ✅';
    } catch (error: any) {
      this.message = 'Erreur : ' + error.message;
    }
  }

}
