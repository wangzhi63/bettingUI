import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.component.html',
    styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
    balance$ = this.userService.userInfo$.pipe(map(userInfo => userInfo?.wallet.balance));

    constructor(private route: ActivatedRoute, private userService: UserService) {}

    ngOnInit(): void {}
}