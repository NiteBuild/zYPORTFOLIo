import { Component, OnInit } from '@angular/core';
import { Provider } from '../classes/provider';
import { ProviderService } from '../services/provider.service';

@Component({
    selector: 'app-providers-list',
    templateUrl: './providers-list.component.html',
    styleUrls: ['./providers-list.component.scss']
})
export class ProvidersListComponent implements OnInit {
    providers: Provider[];
    columnsToDisplay: string[] = ["name", "leadTime", "email"];
    editing: boolean;

    constructor(pr