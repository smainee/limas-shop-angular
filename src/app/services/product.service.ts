import { Injectable } from '@angular/core';
import { Product } from 'app/models/product.model';
import { Observable } from 'rxjs';
import { FireStoreService } from './firestore.service';

@Injectable({ providedIn: 'root' })
export class ProductService extends FireStoreService {
  private _collectionName = 'product';

  public getProducts(): Observable<Product[]> {
    return this.get(this._collectionName);
  }

  public getProductById(id: string): Observable<Product> {
    return this.getById(this._collectionName, id);
  }

  public createProduct(payload: Product): Promise<any> {
    return this.create(payload, this._collectionName);
  }

  public updateProduct(id: string, payload: Product): Promise<any> {
    return this.update(payload, this._collectionName);
  }

  public deleteProduct(id: string): Promise<any> {
    return this.delete(id, this._collectionName);
  }
}
