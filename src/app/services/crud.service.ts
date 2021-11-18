import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection  } from '@angular/fire/firestore';
// import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  constructor(private fireService: Firestore) { }

  createUser(record: any){
    
  }
}
