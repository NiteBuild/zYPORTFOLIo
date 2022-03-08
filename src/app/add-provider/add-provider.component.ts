import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Provider } from '../classes/provider';
import { ProviderService } from '../services/provider.service';

@Component({
    selector: 'app-add-pro