import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category, Product } from '../classes/product';
import { Provider } from '../classes/provider';
import { ProductService } from '../services/product.service';
import { ProviderService } from '../services/provider.service';

@Component({
    selector: 'app-add-item',
    templateUrl: './add