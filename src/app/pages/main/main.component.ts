import { Component } from '@angular/core';

//Importación de la interfaz
import { Usersclass } from '../../interfaces/usersclass';

//Importación del servicio
import { DataService } from '../../providers/data.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  /* LISTA CON LOS ATRIBUTOS DE LA INTERFAZ */
  displayedColumns: string[] = ['nombreUsuario', 'correoUsuario', 'claveUsuario'];


  //Atributo con el tipo de dato de la interfaz
  public data : Usersclass[] = [];

  //Inyección de dependencia del servicio
  constructor(private dataProvider: DataService) { }

  //Ejecución de la petición y suscripción de la respuesta
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Usersclass[]); 
    })
  }

}
