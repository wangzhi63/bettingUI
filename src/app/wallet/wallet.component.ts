import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { WalletService } from './wallet.service';

@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.component.html',
    styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
   
    balance :number | undefined

    constructor(private route: ActivatedRoute, private walletService: WalletService) {}

    ngOnInit(): void {
        const userId = Number(localStorage.getItem('user_id'));
        this.walletService.getWalletByUserId(userId).subscribe(userInfo => {
            this.balance = userInfo.balance;
        });
    }
}