import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-part',
  templateUrl: './third-part.component.html',
  styleUrls: ['./third-part.component.css']
})
export class ThirdPartComponent implements OnInit {
  cards: any[] = [
    {
      icon: 'promotion.png',
      header: 'Quick & Instant',
      text: 'We provide you with a faster approach to applying for a loan. As mentioned earlier, you will get your loan within 24 hours.'
    },
    {
      icon: 'promotion.png',
      header: 'Competitive interest rates',
      text: 'Our interest rates are hard to beat. With us you get more for less.'
    },
    {
      icon: 'promotion.png',
      header: 'Technology driven',
      text: 'We have enhanced the loan application process by utilizing technology to bring you convenience and speed '
    }, {
      icon: 'promotion.png',
      header: 'Convinient & flexible',
      text: 'With us you get access to the funds you need through our hassle-free and efficient processes'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
