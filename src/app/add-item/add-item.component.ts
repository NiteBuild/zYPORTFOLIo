import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category, Product } from '../classes/product';
import { Provider } from '../classes/provider';
import { ProductService } from '../services/product.service';
import { ProviderService } from '../services/provider.service';

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
    categories = Category;
    providers: Provider[];
    form: FormGroup;
    constructor(private productService: ProductService, private providerService: ProviderService, private router: Router) { }

    ngOnInit(): void {
        this.providerService.getAll().subscribe(providers => this.providers = providers)
        this.form = new FormGroup({
            model: new FormControl(),
            brand: new FormControl(),
            barcode: new FormControl(),
            description: new FormControl(),
            price: new FormControl(),
            category: new F