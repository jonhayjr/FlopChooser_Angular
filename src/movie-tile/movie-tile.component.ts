import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent implements OnInit {
  @Input() movie;
  @Input() isSelected;
  @Output() SelectedMovie = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleMovieSelection() {
    this.SelectedMovie.emit(this.movie);
  }

}