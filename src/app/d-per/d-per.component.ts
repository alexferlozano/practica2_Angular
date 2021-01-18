import { Component, OnInit,Input } from '@angular/core';
import { Persona } from '../persona/persona';
import {PersonaComponent} from "../persona/persona.component";

@Component({
  selector: 'app-d-per',
  templateUrl: './d-per.component.html',
  styleUrls: ['./d-per.component.css']
})
export class DPerComponent implements OnInit {
  @Input() dpersona:Persona
  constructor() { }

  ngOnInit(): void {
  }

}
