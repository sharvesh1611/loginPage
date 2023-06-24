import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  addressDetail=false;
  addressForms : any[] = [];
  products: any[] = [
    {
      name: 'Adidas flipflop',
      price: 1000,
      imageUrl: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/38bda96fc91d40c6a88faf450181630a_9366/adilette-tnd-slides.jpg',
      quantity:0
    },
    {
      name: 'Hair dryer',
      price: 1200,
      imageUrl: 'https://cdn.shopify.com/s/files/1/0530/4487/1322/products/1_a574c437-d61e-4eb1-91ee-cbc58e6aa788.jpg?v=1629203507'
    ,quantity:0
    },
    {
      name: 'Smart Watch',
      price: 1000,
      imageUrl: 'https://m.media-amazon.com/images/I/51bsvdUh0TL._AC_UF1000,1000_QL80_.jpg',
      quantity:0
    },
    {
      name: 'Laptop',
      price: 1200,
      imageUrl: 'https://m.media-amazon.com/images/I/81W33YnXpBL._AC_UF1000,1000_QL80_.jpg',
      quantity:0
    },
    {
      name: 'Realme Mobile',
      price: 1000,
      imageUrl: 'https://image01.realme.net/general/20220713/1657684382023.png.webp',
      quantity:0
    },
    {
      name: 'Water Bottle',
      price: 1200,
      imageUrl: 'https://cdn.shopify.com/s/files/1/0024/1644/3437/files/DSC3531.jpg?v=1684917600',
      quantity:0
    }];
    
    addToCart(product: any) {
      product.quantity+=1;
    }
    removeFromCart(product: any){
      if(product.quantity>0){
        product.quantity-=1;
      }
    }
    addAddressForm() {
      this.addressForms.push({});
    }
 
    

   
  

  constructor() { }

  ngOnInit(): void {}

}
