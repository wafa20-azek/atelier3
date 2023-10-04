import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent {
  id!: Number;
  active!: boolean;
  constructor(private actR: ActivatedRoute, private R: Router) {}

  ngOnInit() {
    this.actR.queryParamMap.subscribe((params) => {
      // (this.id = Number(data.get('param'))),
      // (this.active = data.get('param1') === 'true');
      (this.id = Number(params.get('id'))),
        (this.active = params.get('active') === 'true');
    });
  }
  goback() {
    this.R.navigate(['/InvoiceManagement']);
  }
}
