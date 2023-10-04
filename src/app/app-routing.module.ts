import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';

const routes: Routes = [
  { path: 'InvoiceManagement', component: MainInvoiceComponent },
  //{ path: 'invoice/:param/:param1', component: InvoiceComponent },
  { path: 'invoice', component: InvoiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
