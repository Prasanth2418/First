import { Component, OnInit } from '@angular/core';


interface Product{
  sno:string,
  name:string,
  image:string,
  qty:number,
  price:number,
}

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  public products:Product[]=[
    {
   sno:"AA101",
   name:"Apple Watch",
   image:"https://m.media-amazon.com/images/I/610OiiTm9PL._SX425_.jpg",
   qty:1,
   price:1000

  },
  {
    sno:"AA102",
    name:"Realme Watch",
    image:"https://cdn.shopify.com/s/files/1/0266/1371/0884/products/Ice_Blue_3_f44256ba-0851-4631-817a-f86413f2d736.png?v=1657287100",
    qty:1,
    price:2000
 
   },
   {
    sno:"AA103",
    name:"Boat Watch",
    image:"https://static.toiimg.com/thumb/resizemode-4,msid-71216593,imgsize-200,width-1200/71216593.jpg",
    qty:1,
    price:5000
 
   },
   {
    sno:"AA104",
    name:"Noise Watch",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSriUYm3Bqp3bFWnfi9TVca4N3WF8FQmxyBYA&usqp=CAU",
    qty:1,
    price:3000
 
   },
   {
    sno:"AA105",
    name:"Samsung Watch",
    image:"https://m.media-amazon.com/images/I/61v07h6aREL._SL1500_.jpg",
    qty:1,
    price:6000
 
   },
   {
    sno:"AA106",
    name:"Samsung Watch",
    image:"https://m.media-amazon.com/images/I/61v07h6aREL._SL1500_.jpg",
    qty:1,
    price:6000
 
   }
]

  constructor() { }

  ngOnInit(): void {
  }
  public increment(productId:string):void{
    this.products=this.products.map((products:Product)=>{
      if(products.sno===productId){
        return{
          ...products,
          qty:products.qty+1
        }
      }
      return products;
    })
  }

  public decrement(productId:string):void{
    this.products=this.products.map((products:Product)=>{
      if(products.sno===productId){
        return{
          ...products,
          qty:products.qty-1>0?products.qty-1:1
        }
      }
      return products;
    })
  }
}
