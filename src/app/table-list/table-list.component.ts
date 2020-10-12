import {Component, OnInit} from '@angular/core';
declare var $: any;
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
    constructor(private router: Router, private productService: ProductService, private userService: UserService) {
    }

    ngOnInit() {
        this.productService.findAll().subscribe(data => {
            this.products = data;
        });
        this.userService.findAll().subscribe(data => {
            this.users = data;
        });

    }


    deleteUser(id: number) {
        this.userService.deleteUser(id)
            .subscribe(
                data => {
                    window.alert('xóa thành công!')
                    console.log(data);

                },
                error => console.log(error));
    }


// Thông báo Notification !

    showNotification(from, align){
        const type = ['','info','success','warning','danger'];

        const color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Admin Dashboard</b> - a beautiful client for every web developer."

        },{
            type: type[color],
            timer: 100,
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
}
