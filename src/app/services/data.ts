import { inject, Injectable } from '@angular/core';

import {collection, addDoc, getDocs, getDoc, doc, setDoc} from '@angular/fire/firestore'
import { getFirestore } from 'firebase/firestore';
import { db } from '../firebase.config';

@Injectable({
  providedIn: 'root'
})
export class Data {

  
  async EcrireDocument(){
   try {
    await setDoc(doc(db, 'utilisateurs', 'utilisateur1'),{
      age: 22,
      nom:"Mohamed",
      prenom:'Traoré',
      email: 'adiallo7485@gmail.com'
    })
   } catch (error) {
    console.log("Error")
   }
  }
  async LireDocument(){

    //all documents in collections
    const getData = await getDocs(collection(db, 'utilisateurs'))
    //get a data by his id
    const utilisateur = await getDoc(doc(db, 'utilisateurs', 'utilisateur1'))

if (utilisateur.exists()) {
  console.log("Document data:", utilisateur.data());
} else {
  // utilisateur will be undefined in this case
  console.log("No such document!");
}
    
  }

  
}
