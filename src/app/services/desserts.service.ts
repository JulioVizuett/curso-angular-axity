import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dessert } from '../model/postres.model';

@Injectable({
  providedIn: 'root'
})
export class DessertsService {

  constructor(private http: HttpClient) { }

  getDesserts(): Observable<[Dessert]> {
    return this.http.get<[Dessert]>('https://super-rest.herokuapp.com/test/desserts');
  }

  saveDessert(item: Dessert, id?: string): Observable<any> {
    // Sería un update
    if (id !== '') {
      return this.http.put('https://super-rest.herokuapp.com/test/desserts/' + id, item);
    }
    
    return this.http.post('https://super-rest.herokuapp.com/test/desserts', item);
  }

  getSingleDessert(id: string): Observable<Dessert> {
    return this.http.get<Dessert>('https://super-rest.herokuapp.com/test/desserts/' + id);
  }

  deleteDessert(id: string): Observable<any> {
    return this.http.delete('https://super-rest.herokuapp.com/test/desserts/' + id);
  }

}
