import { Component, input } from "@angular/core";
import {MatTabsModule} from '@angular/material/tabs';
import { TabDataI } from "../../models/frontend/tab";


@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    imports: [MatTabsModule],
})

export class TabComponent {
    tabs = input<TabDataI[]>([]);
}