import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Output() stringEvent = new EventEmitter<string>();
  @Output() booleanEvent = new EventEmitter<boolean>();
  @Output() numberEvent = new EventEmitter<number>();
  @Output() voidEvent = new EventEmitter<void>();
  @Output() dateEvent = new EventEmitter<Date>();
  // złożony obiekt
  @Output() objectEvent = new EventEmitter<SelectedDog>();

  createDateEvent() {
    const date = new Date();
    this.dateEvent.emit(date);
  }

  createObjectEvent(click: MouseEvent) {
    const dog: Dog = { name: 'Reksio' };
    const selected: SelectedDog = { dog, click };
    this.objectEvent.emit(selected);
  }
}

interface Dog {
  name: string;
}

export interface SelectedDog {
  dog: Dog;
  click: MouseEvent;
}
