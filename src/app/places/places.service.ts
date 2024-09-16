import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://ephemeralnewyork.wordpress.com/wp-content/uploads/2022/03/330riverside1.jpg?w=973',
      149.99
    ),
    new Place(
      'p2',
      "L'Amour Toujours",
      'Romantic place in Paris',
      'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/14/45/e8.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://img.freepik.com/premium-photo/castle-foggy-day-with-bridge-background_835197-2860.jpg',
      99.99
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}
}
