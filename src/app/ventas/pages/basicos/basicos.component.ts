import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'marcelo';
  nombreUpper:string = 'MARCELO';
  nombreCompleto:string = 'MarCelO DiAz'

  fecha: Date = new Date();
 

}
