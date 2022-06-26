import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  carts = [
    {
      "id":1,
      "name":"name a procuat",
      "price":200,
      "qty":3,
    },
  ];

  ngOnInit(): void {
  }

  removeItem (id:any){
      this.carts = this.carts.filter(c=>c.id!== id);
  }

  updateItemQty(id:any , qty : number){
       const index = this.carts.findIndex(c=>c.id == id);
       const cart = this.carts[index];
       cart.qty = qty;
       if(cart.qty <= 0){
        delete this.carts[index];
       }else{
        this.carts[index] = cart;
       }
  }
  total(){
    let total = 0;
    for (const cart of this.carts) {
      total+=cart.price * cart.qty;
    }
    return total
  }
}
