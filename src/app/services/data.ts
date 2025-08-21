import { inject, Injectable } from '@angular/core';

import {collection, addDoc, getDoc, Firestore} from '@angular/fire/firestore'
import { getFirestore } from 'firebase/firestore';
import { db } from '../firebase.config';

@Injectable({
  providedIn: 'root'
})
export class Data {

  
  async EcrireDocument(){
    try {
      const docRef = await addDoc(collection(db, "utilisateurs"), {
        age:22,
        prenom: 'Mohamed',
        nom: 'Traoré'
  });
  console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log("Vous avez cette erreur" + error)
    }
  }
  LireDocument(){
    
  }

  
}
