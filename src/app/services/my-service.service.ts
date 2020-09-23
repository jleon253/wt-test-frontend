import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) {
    console.log('Servicio listo..');
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }
}
