import { Component, Input } from '@angular/core';
import { socialMediaLogos } from 'src/data/logos';

@Component({
    selector: 'app-platforms-section',
    templateUrl: './platforms-section.component.html',
    styleUrls: ['./platforms-section.component.css']
})
export class PlatformsSectionComponent {
    @Input()
    screen!: string;

    logos = socialMediaLogos;

    activeButton = 'twitter';

    setActive(index: number) {
        this.activeButton = this.logos[index].alt
    }
}