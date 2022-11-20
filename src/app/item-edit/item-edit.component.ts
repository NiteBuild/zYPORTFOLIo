import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Category, Product } from '../classes/product';
import { Provider } from '../classes/provider';
import { ProductService } from '../services/product.service';
import { ProviderService } from '../services/provider.service';

@Component({
    selector: 'app-item-edit',
    templateUrl: './item-edit.component.html',
    styleUrls: ['./item-edit.component