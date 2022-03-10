import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Provider } from '../classes/provider';
import { ProviderService } from '../services/provider.service';

@Component({
    selector: 'app-add-provider',
    templateUrl: './add-provider.component.html',
    styleUrls: ['./add-provider.component.scss']
})
export class AddProviderComponent {
    @Output()
    toggleAdd: EventEmitter<void> = new EventEmitter();
    @Input()
    providers:Provider[];
    form: FormGroup;
    constructor(private 