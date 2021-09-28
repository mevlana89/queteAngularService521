import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../Cocktail';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  listCocktails: Cocktail[] | undefined;

  constructor(cocktailService : CocktailService) { 
    this.listCocktails=cocktailService.getCocktails();
  }

  ngOnInit(): void {
    
  }

}
