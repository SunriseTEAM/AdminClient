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
    showNotification(from, align){
        const type = ['','success'];

        const color = Math.floor(1);

        $.notify({
            icon: "notifications",
            message: "Cập nhật thành công"

        },{
            type: type[color],
            timer: 400,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
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
                    location.reload()

                },
                error => console.log(error));

    }

    updateCategory(category) {
        this.categoryService.updateCategory(category)
            .subscribe(data => {
                    console.log(data);

                }
                , (error) => {
                    console.log(error);
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
                location.reload()
            }, error => {
                console.log(error);
            });
    }
    reset() {
        this.category1 = new Category();
    }
    onSubmit() {
            this.reset();
    }
}
