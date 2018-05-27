import { Component, OnInit } from '@angular/core';

import { Hero } from "../Hero";
import { HeroService } from "../hero.service";
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-dashboar',
  templateUrl: './dashboar.component.html',
  styleUrls: ['./dashboar.component.css']
})
export class DashboarComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
