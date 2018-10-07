import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {


  heroes: Heroe[] = [];

  constructor( private _heroesService: HeroesService,
               private router: Router
    ) {
    // console.log('constructor');
   }

  ngOnInit() {
    this.heroes = this._heroesService.obtenH();
    // console.log( this.heroes );
  }
  // tslint:disable-next-line:whitespace
  verHeroe( idx:number) {
    // console.log(idx);
    this.router.navigate( ['/heroe', idx ]);
  }
}
