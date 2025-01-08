import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidComponent } from './bid/bid.component';
import { OrderComponent } from './order/order.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { WalletComponent } from './wallet/wallet.component';
import { PendingJudgementsComponent } from './pending-judgements/pending-judgements.component';


const routes: Routes = [
  { path: 'contracts', component: ContractListComponent },
  { path: 'bid/:contract_id/:action', component: BidComponent },
  { path: 'order/:contract_id', component: OrderComponent },
  { path: 'create-contract', component: CreateContractComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'wallet', component: WalletComponent },
  { 
    path: 'pending-judgements', 
    component: PendingJudgementsComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
