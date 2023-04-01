import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { header } from 'src/data/navigation';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    constructor(private router: Router) { }
    burger = false;

    showMenu = false;

    wideScreen = true;

    innerWidth!: number;

    linksAndLabels = header;

    @HostListener('window:resize')
    onResize() {
        this.innerWidth = window.innerWidth;

        if (this.innerWidth < 768) {
            this.wideScreen = false;
            this.burger = true;
        } else {
            this.wideScreen = true;
            this.burger = false;
        }
    }

    onShowMenu() {
        this.showMenu = !this.showMenu;
    }
}