import { Component } from '@angular/core';
import { Persona } from './persona/persona';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  verDatos: Boolean = true;
  ver: Boolean= true;
  title = 'practica2Angular';
  dpersona:Persona
  p1:Persona=new Persona("Alex","Lozano",18,"Masculino")
  p2:Persona=new Persona("Humberto","Canales",19,"Masculon")
  p3:Persona=new Persona("Jair","Alejandro",19,"Masculino")
  public personas:Array<Persona>=[]
  constructor()
  {

  }
  ngOnInit(): void {
    this.personas=[
      this.p1,
      this.p2,
      this.p3
    ]
  }
  mostrarPersonas(): void
  {
    this.verDatos=this.verDatos==false? true:false;
  }
  mostrar(): void
  {
    this.ver=this.ver==false? true:false;
    console.log(this.ver)
  }
  onSelect(dpersona: Persona): void
  {
      this.dpersona=dpersona;
  }
}
