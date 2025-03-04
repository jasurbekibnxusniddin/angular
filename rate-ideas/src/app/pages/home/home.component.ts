import { Component, signal } from "@angular/core";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { TabComponent } from "../../shared/components/tab/tab.component";
import { TabDataI } from "../../shared/models/frontend/tab";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [NavbarComponent, TabComponent],
})

export class HomeComponent {

    tabs = signal([ { id : 1, label: 'IT' },{ id : 2, label: 'Aniq Fanlar' } ])

    activeTab = signal<string>('IT');

    onTabsChange(tab: TabDataI ): void {
        console.log("Home: ",tab);

        this.activeTab.set(tab.label);
    }
} 