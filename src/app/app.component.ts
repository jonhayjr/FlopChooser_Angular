import { Component } from '@angular/core';
import {FlopchooserService} from './flopchooser.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  randomMovies = [];
  isCorrect = false;
  isSelected = false;

  constructor(public flopchooserService: FlopchooserService) {

  }

  ngOnInit() {
    this.randomMovies = this.flopchooserService.getRandomMovies();
  }

  playAgain() {
    //Reset variables
    this.isCorrect = false;
    this.isSelected = false;

    //Get random movies
    this.randomMovies = this.flopchooserService.getRandomMovies();
  }

 selectMovie(selected) {
   //Set isSelected variable to true
   this.isSelected = true;

  //Get lowest IMDB rating
   const lowestIMDB = this.flopchooserService.getLowestIMDB(this.randomMovies[0], this.randomMovies[1]);
   
   //Check is selected answer is correct
   this.isCorrect = this.flopchooserService.checkIfCorrect(selected, lowestIMDB);
 }

}
