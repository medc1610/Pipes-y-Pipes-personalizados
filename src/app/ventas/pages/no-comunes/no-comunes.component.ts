import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre:string = 'Marcelo';
  genero:string = 'masculino';

  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino': 'invitarla'
  }
  
  clientes:string[] = ['Maria', 'Pedro', 'Juan', 'Marcelo', 'Rodrigo'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    '=2' : 'tenemos dos clientes esperando.',
    'other':'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Susana';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  persona ={
    nombre: 'Marcelo',
    edad: 25,
    direccion: 'Santiago, Chile'
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela:true
    },
    {
      nombre: 'Robin',
      vuela:false
    },
    {
      nombre: 'Aquaman',
      vuela:false
    }
  ];

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    }, 3500);
    
 
  });
}
