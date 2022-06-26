import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  items = [
    {
      "id":1,
      "title":"title ش product",
      "category":"category ش product",
      "description":"dsa  سdas das d",
      "price":200
    },
    {
      "id":2,
      "title":"title product",
      "category":"category  product",
      "description":"dsa dasي das d",
      "price":230
    },
  ];

  ngOnInit(): void {

  }
  addToCart(id:any){
      console.log(`added : ${id}`);

  }
}
