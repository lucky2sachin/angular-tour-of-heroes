import { Injectable } from '@angular/core';
import { Hero } from '../app/heroes/hero';
import { HEROES  } from './mock-heroes';
import{ Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

getHeroes(): Observable<Hero[]>{
  const heroes = of(HEROES);
  this.messageService.add('Herostring: sachin');
  return heroes;
}
}
