import { PersonaDTO } from './../model/persona/persona-dto.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private personaDTO: Array<PersonaDTO>;
  constructor(private http:HttpClient) { }

  public loadPersonas(): Observable<PersonaDTO[]>{
    return this.http.get<PersonaDTO[]>("http://localhost:8080/getPersonas");
  }
}
