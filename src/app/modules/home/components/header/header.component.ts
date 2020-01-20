import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() EventOpenNavside = new EventEmitter<void>();
  isHidden: boolean;
  constructor() {}

  ngOnInit() {
    this.isHidden = true;
  }

  sidenavOpen() {
    return this.EventOpenNavside.emit();
  }
}
