import { Injectable } from '@angular/core';
//Importación del HttpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //Atributo URL
  private URL: string = 'http://localhost:3000/rest/usersClass/findAll/json';


  //Inyección de dependencia del HttpClient
  constructor(private http: HttpClient) { }

  //Método con la petición HTTP
  getResponse() {
    return this.http.get(this.URL);
  }

}
