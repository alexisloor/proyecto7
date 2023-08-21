import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  description: string = 'Sistema para llevar un registro y control de las finanzas de un usuario o de una empresa'; /* Cambie el texto con la descripción de su proyecto */
}
