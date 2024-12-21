

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidComponent } from './bid/bid.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';


const routes: Routes = [
  { path: 'contracts', component: ContractListComponent },
  { path: 'bid/:contract_id', component: BidComponent },
  { path: 'create-contract', component: CreateContractComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
