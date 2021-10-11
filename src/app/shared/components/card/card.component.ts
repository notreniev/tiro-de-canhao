import { Component, Input, OnInit } from '@angular/core';
import { getIdeaMocks } from '../../../domains/mocks/idea.mock';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() ideas = [];
  questions: any[] = [];

  constructor() {
    this.ideas = getIdeaMocks();
    console.log('cards', this.ideas);
  }

  radioGroupChange(idea, $event) {
    const value = $event.detail.value;
    idea.rank = value ? Number(value) : undefined;
    console.table(idea);
  }

  ngOnInit() { }
}
