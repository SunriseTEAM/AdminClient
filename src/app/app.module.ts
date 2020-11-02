import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {HttpClientModule} from '@angular/common/http';

import {MatTooltipModule} from '@angular/material/tooltip';
import {CategoryListComponent} from './categoryList/category-list.component';
import {CategoryFormComponent} from './table-form/category-form.component';




@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        }),
        MatTooltipModule
    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
      CategoryListComponent,
      CategoryFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
