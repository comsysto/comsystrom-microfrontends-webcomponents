import {Component, OnInit} from '@angular/core';
import {ComsystromEvent} from '../comsystrom-event';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    navigationItems = [
        {
            path: '/connection-objects', name: 'Connection Objects', bundles: [
                {bundleUrl: "http://localhost:5001/static/js/bundle.js", elementName: "cs-search"},
                {bundleUrl: "http://localhost:5003/js/app.js", elementName: "cs-details"}
            ]
        },
        {path: '/customers', name: 'Customers', bundles: []},
    ];

    private channel: BroadcastChannel;

    constructor() {
    }

    ngOnInit(): void {
        this.channel = new BroadcastChannel('comsystrom');
    }

    onNavigate(navigationItem): void {
        const event: ComsystromEvent = {
            key: 'navigation:change',
            value: navigationItem
        };

        this.channel.postMessage(event);
    }

}
