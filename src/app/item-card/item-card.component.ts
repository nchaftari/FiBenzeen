import { AotSummaryResolver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as Aos from 'aos';
import { UpdateStatusComponent } from '../update-status/update-status.component';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() open:boolean=true

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    Aos.init()
  }
  openDialog() {
    const dialogRef = this.dialog.open(UpdateStatusComponent,{data:{item:"s"}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log(result.status)
      console.log(result.quantity)
      console.log(result.quantityDone)
      // this.customerOrderService.updateOrder(this.orderItem.id,result.status,result.quantity,result.quantityDone);
    });
  }

}
