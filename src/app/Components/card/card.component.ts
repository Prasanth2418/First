import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  public tourName: string = 'paris';
  public tourImage: string =
    'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900';
  public Time: string = new Date().toLocaleTimeString();
  constructor() {
    this.updateTime();
  }

  ngOnInit(): void {}
  public getDate(): string {
    return new Date().toLocaleDateString();
  }

  public updateTime(): void {
    setInterval(() => {
      this.Time = new Date().toLocaleTimeString();
    }, 1000);
  }
}
