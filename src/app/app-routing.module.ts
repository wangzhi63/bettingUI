

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidComponent } from './bid/bid.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';

const routes: Routes = [
  { path: 'contracts', component: ContractListComponent },
  { path: 'bid/:contract_id', component: BidComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
