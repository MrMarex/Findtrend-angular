import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-open-tabs-section',
  templateUrl: './open-tabs-section.component.html',
  styleUrls: ['./open-tabs-section.component.css']
})
export class OpenTabsSectionComponent {
  @Input()
  screen!: string
}