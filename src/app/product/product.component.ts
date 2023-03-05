import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(private productService: ProductService) {
      productService.getProducts().forEach(t => {
        console.log(t);
      })
  }
}
