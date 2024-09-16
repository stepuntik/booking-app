import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place?: Place;

  constructor(
    // private router: Router,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placeService: PlacesService
  ) {}

  ngOnInit() {
    this.loadPlace();
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover'); // slide UP animation (as forward)
    this.navCtrl.navigateBack('/places/tabs/discover'); // slide DOWN animation (as backward)
  }

  loadPlace() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }

      this.place = this.placeService.getPlace(paramMap.get('placeId')!);
    });
  }
}
