import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FireStoreService {
  constructor(private firestore: AngularFirestore) {}

  public get(collectionName: string): Observable<any> {
    return this.firestore
      .collection<any>(collectionName)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = { data: a.payload.doc.data() };
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  public getById(collectionName: string, id: string): Observable<any> {
    return this.firestore
      .collection<any>(`${collectionName}/${id}`)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = { data: a.payload.doc.data() };
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  public create(data: any, collectionName: string): Promise<any> {
    return this.firestore.collection<any>(collectionName).add(data);
  }

  public update(data: any, collectionName: string): Promise<any> {
    return this.firestore.doc(`${collectionName}/${data.id}`).update(data);
  }

  public delete(id: string, collectionName: string): Promise<any> {
    return this.firestore.doc(`${collectionName}/${id}`).delete();
  }
}
