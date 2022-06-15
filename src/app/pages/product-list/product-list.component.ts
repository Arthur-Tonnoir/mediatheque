import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  films: any[] = [
    {
      id: 1,
      title: "Teste",
      text: "1245369",
      imgUrl: ""
    },
    {
      id: 2,
      title: "Teste",
      text: "1245369",
      imgUrl: ""
    }
  ];

  albums: any[] = [
    {
      id: 1,
      title: "Teste",
      text: "1245369",
      imgUrl: ""
    },
    {
      id: 2,
      title: "title 2 ",
      text: "text 2",
      imgUrl: ""
    }
  ];

  @Input()
  title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
