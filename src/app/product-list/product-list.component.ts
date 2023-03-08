import { Product } from '../classes/product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from "../services/product.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from '@angular/router';


@Component({
    selector: 'app-product-list',
    templateUr