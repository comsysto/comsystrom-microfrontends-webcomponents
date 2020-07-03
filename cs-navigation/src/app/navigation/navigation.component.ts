import { Component, OnInit } from '@angular/core';
import { ComsystromEvent } from '../comsystrom-event';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    tabs = [
        { path: '/anschlussobjekte', name: 'Anschlussobjekte' },
        { path: '/kunden', name: 'Kunden' },
    ];

    private channel: BroadcastChannel;

    constructor() {
    }

    ngOnInit(): void {
        this.channel = new BroadcastChannel('comsystrom');
    }

    onTabClicked(tab): void {
        const event: ComsystromEvent = {
            key: 'navigation:change',
            value: tab
        };

        this.channel.postMessage(event);
    }

}
