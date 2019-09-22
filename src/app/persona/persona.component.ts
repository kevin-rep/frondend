import { PersonaDTO } from './../model/persona/persona-dto.model';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from './persona.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers:[PersonaService]
})
export class PersonaComponent implements OnInit {
  private personaDTO: Array<PersonaDTO>;
  constructor(private PersonaService: PersonaService) { }
  
  ngOnInit() {
    this.loadPersonas();
  }
  private loadPersonas(): void{
    //console.log(this.PersonaService.loadPersonas());
   this.PersonaService.loadPersonas().subscribe(res =>{
    this.personaDTO=res;
    console.log(res);

   });

  }

}
