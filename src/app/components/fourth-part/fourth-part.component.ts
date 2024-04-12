import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-part',
  templateUrl: './fourth-part.component.html',
  styleUrls: ['./fourth-part.component.css'],
})
export class FourthPartComponent implements OnInit {
  items: any[] = [
    {
      heading: 'Why Revent',
      header: 'We are a micro-finance body that cares',
      text: 'We support micro businesses and enterprises within the fast-moving consumer goods (FMCG) sector with a view to reduce hunger and foster a thriving micro economy within our communities amongst men and women.',
      img: 'img1.png',
    },
    {
      heading: 'What we offer',
      header: 'Have access to loans anytime anywhere',
      text: 'We also provide working capital support the micro businesses within the FMCG value chain to meet daily operational needs & partner with you to grow your business by providing the right type of funding.',
      img: 'img2.png',
    },
    {
      heading: 'What we offer',
      header: 'Financial Advisory, consultation and Lending services',
      text: 'We provide business advisory that is backed with funding to increase turnover and in turn profits while alleviating poverty especially among-st women and communities that are under banked or unbanked. ',
      img: 'img3.png',
      icons: ['Money Lending', 'Micro-Finance', 'Advisory'],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
