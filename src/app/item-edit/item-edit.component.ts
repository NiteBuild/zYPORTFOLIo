import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Category, Product } from '../classes/product';
import { Provider } from '../classes/provider';
import { ProductService } from '../services/product.service';
import { ProviderService } from '../services/provider.service';

@Component({
    selector: 'app-item-edit',
    templateUrl: './item-edit.component.html',
    styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
    @Input()
    product: Product;
    @Output()
    toggleEdit = new EventEmitter<void>();
    categories = Category;
    form: FormGroup;
    providers: Provider[];

    constructor(private productService: ProductService, private providerService: ProviderService) { }

    ngOnInit(): void {
        this.providerService.getAll().subscribe(provs => this.providers = provs);
        this.form = new FormGroup({
            model: new FormControl(this.product.model),
            brand: new FormControl(this.product.brand),
            barcode: new FormControl(this.product.barcode),
            description: new FormControl(this.product.description),
            price: new FormControl(this.product.price),
            category: new FormControl(th