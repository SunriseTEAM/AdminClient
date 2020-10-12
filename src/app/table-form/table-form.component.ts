import { Component, OnInit } from '@angular/core';
import {Product} from '../Module/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../Service/product.service';

@Component({
  selector: 'app-typography',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit {
  product: Product;
  constructor(private route: ActivatedRoute, private  router: Router, private productService: ProductService) {
    this.product = new Product();
  }

  ngOnInit() {
    this.productService.save(this.product).subscribe(result => this.gotoProductList());
  }
  gotoProductList() {
    this.router.navigate(['/products']);
  }
}
