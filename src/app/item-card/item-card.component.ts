import { AotSummaryResolver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import * as Aos from 'aos';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() open:boolean=true

  constructor() { }

  ngOnInit(): void {
    Aos.init()
  }

}
