import { Product } from '../classes/product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from "../services/product.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from '@angular/router';


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
    productList: Product[] = [];
    displayedColumns: string[] = [ 'brand', "model", "barcode", "price", "units"];
    dataSource: MatTableDataSource<Product>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private p