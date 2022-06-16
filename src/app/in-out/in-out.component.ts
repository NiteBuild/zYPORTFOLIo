
import { AfterViewInit, Component,  ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../classes/product';
import { ProductService } from '../services/product.service';
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";
import { QuaggaJSResultObject } from '@ericblade/quagga2';

@Component({
    selector: 'app-in-out',
    templateUrl: './in-out.component.html',