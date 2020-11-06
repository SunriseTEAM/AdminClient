import {Component, OnInit} from '@angular/core';
import {Product} from '../Module/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../Service/product.service';
import {User} from '../Module/user/user';
import {UserService} from '../Service/user.service';
import {CategoryService} from '../Service/category.service';
import {Category} from '../Module/category';
import {MessageService} from '../Module/message.spec';
import {Message} from '../Module/message';


@Component({
    selector: 'app-typography',
    templateUrl: './table-form.component.html',
    styleUrls: ['./table-form.component.css']
})
export class CategoryFormComponent implements OnInit {
    product: Product;
    category: Category;


    // tslint:disable-next-line:max-line-length
    constructor(private route: ActivatedRoute, private  router: Router, private productService: ProductService, private categoryService: CategoryService,
               private messageService: MessageService) {
        this.product = new Product();
    }

    ngOnInit() {
        this.category = new Category();
    }


    save() {
        this.categoryService.createCategory(this.category)
            .subscribe(data => {
                console.log(data);
            }, error => {
                console.log(error);
            });
    }

    reset() {
        this.category = new Category();
    }

    /**
     * Function handles form submitting
     */
    onSubmit() {
        this.save();
        this.reset();
    }
}
