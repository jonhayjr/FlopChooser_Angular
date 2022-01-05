import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: [ './message-display.component.css']
})

export class MessageDisplayComponent  {
  @Input() isSelected;
  @Input() isCorrect;
  @Output() playAgainEvent = new EventEmitter();

  correctMessage = 'Your answer is correct.  Great job!'
  incorrectMessage = 'Your answer is incorrect.  Better luck next time!  Please try again!'

  constructor() {

  }

  ngOnInit() {
   
  }

  handlePlayAgainClick() {
    this.playAgainEvent.emit();
  }


 displayMessage() {
  return this.isCorrect ? this.correctMessage : this.incorrectMessage;
}

}
