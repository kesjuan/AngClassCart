import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  //template:`<tr class="styles1" > </tr> `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


constructor(){}

ngOnInit(): void {
    
}
products= [
{ 
  "id":1,
    "name":"cheese burger",
    "brand":"Mcdonalds",
    "inStock": 5,
    "price": 5.00,
    "image": "https://i.pinimg.com/originals/47/2d/c3/472dc3346c5d2746cac2db4d95cc1e22.png",
    "featured": false,
    "qty":0
},
{ 
  "id":2,
    "name":"fries",
    "brand":"Wendys",
    "inStock": 10,
    "price": 1.00,
    "image": "https://pngimg.com/uploads/fries/fries_PNG48.png",
    "featured": true,
    "qty":0
},
{ 
  "id":3,
    "name":"soda",
    "brand":"Five Guys",
    "inStock": 15,
    "price": .50,
    "image": "https://icon-library.com/images/soda-icon/soda-icon-10.jpg",
    "featured": false,
    "qty":0
}
]
cart: Object[] = [];
increaseQty(product: any){
product.qty++;
//product.inStock--;
//this.cart.push(product);
}
decreaseQty(product: any){
  if(product.qty > 0){
 product.qty--;
 //product.inStock++;
// let inNum = this.cart.lastIndexOf(product);
 //this.cart.splice(inNum,1);
  }

}
qtyCount(): any {
  let count = 0;
  for (let index = 0; index < this.products.length; index++) {
    const element = this.products[index];
    count += element.qty
  }
  return count;
}


priceTotal(): any{
  let total = 0;
  for (let index = 0; index < this.products.length; index++) {
    const element = this.products[index];
    total += element.price * element.qty;
  }
  return total;
}



}
