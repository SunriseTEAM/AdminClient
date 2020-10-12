import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {Product} from '../Module/product';
import {ProductService} from '../Service/product.service';
import {User} from '../Module/user/user';
import {UserService} from '../Service/user.service';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  products: Product[];
  users: User[];
  constructor( private router: Router, private productService: ProductService, private userService: UserService) { }

  ngOnInit() {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    });
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

}
