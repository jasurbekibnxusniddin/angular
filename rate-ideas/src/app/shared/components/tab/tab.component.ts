import { Component, input, output } from "@angular/core";
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { TabDataI } from "../../models/frontend/tab";


@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    imports: [MatTabsModule],
})

export class TabComponent {
    tabs = input<TabDataI[]>([]);

    tabsChange = output<TabDataI>();

    onTabChange(tab: MatTabChangeEvent): void { 
        // console.log(tab);
        // console.log(this.tabs()[tab.index]);
        // console.log(this.tabs()[tab.index].label);  

        const selectedTab = this.tabs()[tab.index]
        
        this.tabsChange.emit( selectedTab ); 
    }
}