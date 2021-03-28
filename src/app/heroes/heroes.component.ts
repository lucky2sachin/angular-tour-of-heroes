import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
 heroes = HEROES;
 
 selectedHero?: Hero;
 
  constructor() {
   }

  ngOnInit(): void {
  }
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
 
 // https://angular.io/tutorial/toh-pt2

}