import { Injectable, NgZone } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Router } from '@angular/router'
import { FireStoreService } from './firestore.service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
}
