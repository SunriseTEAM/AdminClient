import {Component, OnInit} from '@angular/core';

declare var $: any;
import {Router} from '@angular/router';
import {Category} from '../Module/category';
import {CategoryService} from '../Service/category.service';
import {Message} from '../Module/message';


@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
    category: Array<Category> = [];
    showCategory: Category;
    isNameUpdate = false;
    isUpdate: Array<boolean> = []

    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.categoryService.findAll().subscribe(data => {
            this.category = data;
        });

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
                    console.log('success');
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
}
