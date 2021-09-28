import { Injectable } from  '@angular/core';
import { Cocktail } from './Cocktail';

@Injectable({
        providedIn:  'root'
})

export  class  CocktailService {

    // model: Order = new Order();

    public cocktails : Cocktail[] = [
        {nom: 'name5', price : 5, img: 'http'},
        {nom: 'name6', price : 6, img: 'http'},
        {nom: 'name7', price : 7, img: 'http'}
    ];

        constructor() { }

        public getCocktails():Cocktail[]{
                return this.cocktails;
        }

}