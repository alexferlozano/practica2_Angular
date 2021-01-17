import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Persona } from './persona';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input() persona:Persona
  @Output() changePer = new EventEmitter<Persona>();
  constructor() { }

  ngOnInit(): void {
  }
  cambiarPer():void
  {
    this.changePer.emit(this.persona);
  }
}
