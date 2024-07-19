import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  product!: Product;

  constructor(activatedRoute: ActivatedRoute, productService: ProductService,
    private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.product = productService.getProductById(params.id);
    })
   }


  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl("/cart-page");
  }

}
