import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eventslist',
  templateUrl: './eventslist.component.html',
  styleUrls: ['./eventslist.component.css']
})
export class EventslistComponent implements OnInit {
  @Input() CurDateTime: Array<string>;
  constructor() {
  }

  ngOnInit(): void {
  }

  getColor(LineNumber: number) {
    if (LineNumber > 4) {
      return 'blue';
    } else {
      return 'None';
    }
  }

}
