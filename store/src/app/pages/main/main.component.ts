import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, activatedRoute: ActivatedRoute) { 
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      this.products = this.productService.getAllProductsBySearchTerm(params.searchTerm);
      else
      
    this.products = productService.getAll();
  })

}

  ngOnInit(): void {}

}
