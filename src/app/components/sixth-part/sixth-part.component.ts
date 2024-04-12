import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth-part',
  templateUrl: './sixth-part.component.html',
  styleUrls: ['./sixth-part.component.css'],
})
export class SixthPartComponent implements OnInit {
  cards: any[] = [
    {
      icon: 'placard.png',
      header: 'A digital prescription for the pharma industry',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sodales elit......',
    },
    {
      icon: 'placard.png',
      header: 'A digital prescription for the pharma industry',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sodales elit......',
    },
    {
      icon: 'placard.png',
      header: 'A digital prescription for the pharma industry',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sodales elit......',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
