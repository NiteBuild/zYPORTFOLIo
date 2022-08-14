import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../classes/product';
import { ProductService } from '../services/product.service';
import { Stat } from '../classes/stat';

@Component({
    selector: 'app-item-details',
    templateUrl: './item-details.component.html',
    styleUrls: ['./item-details.component.scs