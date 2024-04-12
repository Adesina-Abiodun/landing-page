import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-part',
  templateUrl: './second-part.component.html',
  styleUrls: ['./second-part.component.css'],
})
export class SecondPartComponent implements OnInit {
  items: any[] = [
    {
      title: 'Apply',
      description:
        'Take your first step to financial freedom by applying for a loan from us and we will be available to help you every step of the way.',
    },

    {
      title: 'Get verified',
      description:
        'We follow a well-regulated process to evaluate you/your documents we verify you and move you to the next step.',
    },

    {
      title: 'Get funded',
      description:
        'After evaluation you will get your loan, all of this will occur within 24 hours. Our loans are quick and easy. It’s that simple',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
