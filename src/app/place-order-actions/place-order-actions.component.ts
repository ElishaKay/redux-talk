import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-order-actions',
  templateUrl: './place-order-actions.component.html',
  styleUrls: ['./place-order-actions.component.css']
})
export class PlaceOrderActionsComponent implements OnInit {
  private runningTotal: number;
  // tslint:disable-next-line:no-unused-variable
  private codeSample: string = `
const orders = [
  { type: 'PLACE_ORDER', orderTotal: 10 },
  { type: 'PLACE_ORDER', orderTotal: 20 },
  { type: 'PLACE_ORDER', orderTotal: 30 },
];

function addOrderToRunningTotal(currentRunningTotal, order) {
  debugger;
  return currentRunningTotal + order.orderTotal;
}

this.runningTotal = orders.reduce(addOrderToRunningTotal, 0);
  `;

  ngOnInit() {
    const orders = [
      { type: 'PLACE_ORDER', orderTotal: 10 },
      { type: 'PLACE_ORDER', orderTotal: 20 },
      { type: 'PLACE_ORDER', orderTotal: 30 },
    ];

    function addOrderToRunningTotal(currentRunningTotal, order) {
      debugger;
      return currentRunningTotal + order.orderTotal;
    }

    this.runningTotal = orders.reduce(addOrderToRunningTotal, 0);
  }
}
