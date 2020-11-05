import {Component, OnInit} from '@angular/core';

declare var $: any;
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../Module/category';
import {CategoryService} from '../Service/category.service';
import {Message} from '../Module/message';
import {ProductService} from '../Service/product.service';
import {MessageService} from '../Module/message.spec';


@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
    category: Array<Category> = [];
    showCategory: Category;
    isNameUpdate = false;
    isUpdate: Array<boolean> = [];
    category1: Category;

    // tslint:disable-next-line:max-line-length
    constructor(
        private route: ActivatedRoute,
        private  router: Router,
        private productService: ProductService,
        private categoryService: CategoryService,
        private messageService: MessageService) {
    }

    ngOnInit() {
        this.categoryService.findAll().subscribe(data => {
            this.category = data;
        });
        this.category1 = new Category();
    }

    deleteCategory(id: number) {
        this.categoryService.deleteCategory(id)
            .subscribe(
                data => {
                    window.alert('xóa thành công!')
                    console.log(data);

                },
                error => console.log(error));

    }

    updateCategory(category) {
        console.log(category);
        this.categoryService.updateCategory(category)
            .subscribe(data => {
                    window.alert('Cập nhật thành công!')
                    console.log(data);

                }
                , (error) => {
                    console.log(error);
                    let errMsg = 'Update Fail ! Error = ' + error;
                });
    }

    updateName(index) {
        console.log(index);
        this.isUpdate[index] = !this.isUpdate[index];
        // this.isNameUpdate = !this.isNameUpdate;
    }

    save() {
        this.categoryService.createCategory(this.category1)
            .subscribe(data => {
                window.alert('Thêm mới thành công!')
                console.log(data);

            }, error => {
                console.log(error);
            });
    }

    getCategoryById() {
        let findedData = this.category1.id;
        if (typeof findedData === 'undefined') {
            return null;
        }
        return findedData;

    }

    reset() {
        this.category1 = new Category();
    }
    onSubmit() {
            this.reset();
    }
}
